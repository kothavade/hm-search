import { Row } from "@tanstack/react-table"
import { Info } from "lucide-react"

import { Record } from "@/lib/scrape"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CodeView } from "@/components/code-view"

export function RowInfo({ row }: { row: Row<Record> }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex min-w-[50vw] flex-col">
        <DialogHeader>
          <DialogTitle className="overflow-x-auto pb-2">
            {row.original.title}
          </DialogTitle>
          <DialogDescription>{row.original.description}</DialogDescription>
        </DialogHeader>
        <div className="flex max-h-[75vh] flex-col gap-4 overflow-auto">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">Type</h2>
            <p>{row.original.type}</p>
          </div>
          {row.original.note && (
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">Note</h2>
              <p>{row.original.note}</p>
            </div>
          )}
          {row.original.default && (
            <CodeView title={"Default"} code={row.original.default} />
          )}
          {row.original.example && (
            <CodeView title={"Example"} code={row.original.example} />
          )}
          {row.original.declared_by && (
            <div className="flex flex-col gap-1">
              <div className="font-bold">Declared By</div>
              <div>
                {row.original.declared_by.map((item) => (
                  <div key={item.link}>
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
