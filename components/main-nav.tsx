import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-2">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.nix className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
