"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Record } from "@/lib/scrape"

import { DataTableColumnHeader } from "./header"
import { RowInfo } from "./info"

export const columns: ColumnDef<Record>[] = [
  {
    id: "expand",
    cell: ({ row }) => <RowInfo row={row} />,
    meta: {
      size: "10%",
    },
  },
  {
    accessorKey: "title",
    cell: ({ row }) => <pre className="font-mono">{row.getValue("title")}</pre>,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
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
