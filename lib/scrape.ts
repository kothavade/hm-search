import fs from "fs"
import { load } from "cheerio"

interface DeclaredBy {
  link: string
  text: string
}

export interface Record {
  title: string
  description: string
  type: string
  declared_by: DeclaredBy[]
  note: string | null
  default: string | null
  example: string | null
}

export interface Data {
  last_update: string
  options: Record[]
}

const url = "https://nix-community.github.io/home-manager/options.xhtml"

async function scrape() {
  const html = await fetch(url).then((res) => res.text())

  const $ = load(html)

  const records: Record[] = []

  $("dl.variablelist dt").each((_, dt) => {
    const opt: Record = {
      title: "",
      description: "",
      type: "",
      declared_by: [],
      note: null,
      default: null,
      example: null,
    }
    const dds = $(dt).nextAll("dd").first()
    opt.title = $(dt).find("span a code").text()
    if (opt.title === "") {
      return
    }
    dds.contents().each((i, ch) => {
      if (i === 1) {
        opt.description = $(ch).text().trim().replace("\n", " ")
      } else if (i === 2) {
        if ($(ch).text().startsWith("Type:")) {
          opt.type = $(ch).text().substring(5).trim()
        } else {
          opt.note = $(ch).text().trim() || null
        }
      } else {
        if ($(ch).text().startsWith("Type:")) {
          opt.type = $(ch).text().substring(5).trim().replace("\n", "")
        } else if ($(ch).text().startsWith("Default:")) {
          opt.default = $(ch)
            .text()
            .substring(8)
            .trim()
            .replace("\n", "")
            .replace(/\s+/g, " ")
        } else if ($(ch).text().startsWith("Declared by:")) {
          const declared = $(ch)
            .nextAll("table")
            .first()
            .text()
            .trim()
            .replace(/\s+/g, "\n")
            .split("\n")

          // if (declared.length > 1) {
          // 	console.log(opt.title.toUpperCase());
          // 	console.log(declared);
          // }

          for (const decl of declared) {
            const decllink = `https://github.com/nix-community/home-manager/blob/master/${decl
              .replace("<home-manager/", "")
              .replace(">", "")}`
            const decltext = decl.replace("<", "").replace(">", "")
            opt.declared_by.push({
              link: decllink,
              text: decltext,
            })
          }
        } else if ($(ch).text().startsWith("Example:")) {
          const example = $(ch).nextAll("pre").first()
          opt.example =
            example.length > 0 ? example.text() : $(ch).find("code").text()
        }
      }
    })
    records.push(opt)
  })

  const data: Data = {
    last_update: new Date().toUTCString(),
    options: records,
  }

  fs.writeFileSync("data/options.json", JSON.stringify(data, null, 2))
  console.log("Finished parsing home manager options.")
}

scrape()
