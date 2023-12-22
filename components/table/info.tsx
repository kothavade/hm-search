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

export function RowInfo({ row }: { row: Row<Record> }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{row.getValue("title")}</DialogTitle>
          <DialogDescription>{row.getValue("description")}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
              <h2 className="font-bold">Type</h2>
            <div>{row.getValue("type")}</div>
          </div>
          {row.original.note && (
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">Note</h2>
              <div>{row.original.note}</div>
            </div>
          )}
          {row.original.default && (
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">Default</h2>
              <code>{row.original.default}</code>
            </div>
          )}
          {row.original.example && (
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">Example</h2>
              <code>{row.original.example}</code>
            </div>
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
                      className="underline text-blue-600"
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
