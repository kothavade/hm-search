"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Record } from "@/lib/scrape"

import { fuzzyFilter } from "./fuzzy"
import { DataTableColumnHeader } from "./header"
import { RowInfo } from "./info"

export const columns: ColumnDef<Record>[] = [
  {
    id: "info",
    cell: ({ row }) => <RowInfo row={row} />,
    meta: {
      size: "10%",
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => (
      <code className="font-mono" title={row.original.title}>
        {row.original.title}
      </code>
    ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    filterFn: fuzzyFilter,
    meta: {
      size: "30%",
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    meta: {
      size: "30%",
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    meta: {
      size: "30%",
    },
  },
]
