import { Suspense } from "react"
import options from "@/data/options.json"

import { Record } from "@/lib/scrape"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/table"

export default function IndexPage() {
  return (
    <section className="container">
      <Suspense>
        <DataTable
          columns={columns}
          data={options.options as unknown as Record[]}
        />
      </Suspense>
    </section>
  )
}
