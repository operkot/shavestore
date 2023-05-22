import { FC } from 'react'

import { ProductSearch } from '../product-search'
import { ProductFilters } from '../product-filters/product-filters'

export const ProductTools: FC = () => {
  return (
    <div className="flex items-center gap-3 mb-6 last:mb-0 p-3 rounded-2xl bg-base-30 shadow-panel">
      <ProductSearch className="grow" onSearch={() => {}} />
      <ProductFilters className="shrink-0" onFiltersChange={() => {}} />
    </div>
  )
}
