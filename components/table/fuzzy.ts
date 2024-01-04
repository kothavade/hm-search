import { rankItem } from "@tanstack/match-sorter-utils"
import { FilterFn } from "@tanstack/react-table"

import { Record } from "@/lib/scrape"

export const fuzzyFilter: FilterFn<Record> = (
  row,
  columnId,
  value,
  addMeta
) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the ranking info
  addMeta(itemRank)

  // Return if the item should be filtered in/out
  return itemRank.passed
}
