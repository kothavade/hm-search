import Link from "next/link"
import options from "@/data/options.json"
import { Book, Github } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Data } from "@/lib/scrape"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { last_update } = options as Data
  const timeDifference = new Date().getTime() - new Date(last_update).getTime()
  const hoursDifference = Math.floor(timeDifference / 1000 / 60 / 60)
  const lastUpdate = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
    style: "long",
  }).format(-hoursDifference, "hours")

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/40 backdrop-blur-md">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <p className="text-sm text-gray-500">
            <em>Last updated: {lastUpdate}</em>
          </p>
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.docs} target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Book className="h-5 w-5" />
                <span className="sr-only">Documentation</span>
              </div>
            </Link>

            <Link href={siteConfig.links.github} target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
