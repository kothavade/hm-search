import options from "@/data/options.json"

import { Record } from "@/lib/scrape"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/table"

export default function IndexPage() {
  return (
    <section className="container">
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {siteConfig.description}
        </h1>
      </div> */}
      <DataTable
        columns={columns}
        data={options.options as unknown as Record[]}
      />
    </section>
  )
}
