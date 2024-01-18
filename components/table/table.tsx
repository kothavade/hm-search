"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./pagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // TODO: use next-query-params?
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: "title",
      value: searchParams.get("q") ?? "",
    },
  ])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
      sorting,
    },
  })

  useEffect(() => {
    const path = columnFilters.find((filter) => filter.id === "title")
      ? `${pathname}?q=${columnFilters.find((filter) => filter.id === "title")
          ?.value}`
      : pathname
    router.push(path)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters])

  // reset title filter if query param is removed
  useEffect(() => {
    if (!searchParams.get("q")) {
      console.log("reset")
      table.getColumn("title")?.setFilterValue("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("q")])

  return (
    <div>
      <div className="relative flex w-full items-center py-4">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2"
          height={20}
        />
        <Input
          placeholder="Search..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-full pl-10"
        />
      </div>
      <div className="rounded-md border">
        <Table className="table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      // @ts-ignore
                      style={{ width: header.column.columnDef.meta.size }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      // @ts-ignore
                      style={{ width: cell.column.columnDef.meta.size }}
                      className="truncate py-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="my-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}
