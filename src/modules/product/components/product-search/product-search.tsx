import { FC } from 'react'
import cn from 'classnames'

import { Icon } from 'components'

interface ProductSearchProps {
  className?: string
  onSearch: (query: string) => void
}

export const ProductSearch: FC<ProductSearchProps> = ({
  className,
  onSearch,
}) => (
  <div
    className={cn(
      'flex items-center gap-2 p-1.5 rounded-md bg-white',
      className
    )}
  >
    <Icon name="search" className="w-5 h-5 fill-[#b8b8b8]" />

    <input
      className="focus:outline-none"
      type="text"
      placeholder="Поиск"
      onChange={e => onSearch(e.target.value)}
    />
  </div>
)
