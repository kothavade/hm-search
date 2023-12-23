import { CopyButton } from "@/components/copy-button"

export function CodeView({ title, code }: { title: string; code: string }) {
  console.log(code)
  return (
    <div className="relative flex flex-col gap-1">
      <h2 className="font-bold">{title}</h2>
      <div className="absolute right-2 top-9">
        <CopyButton value={code} />
      </div>
      <pre className="overflow-auto rounded bg-muted p-2">
        <code>{code}</code>
      </pre>
    </div>
  )
}
