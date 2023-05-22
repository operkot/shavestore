import { FC } from 'react'
import cn from 'classnames'

import { Icon, Dialog, useDialog } from 'components'

interface ProductFiltersProps {
  className?: string
  onFiltersChange: (filters: any) => void
}

export const ProductFilters: FC<ProductFiltersProps> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDialog()

  return (
    <div className={cn(className)}>
      <button className="block w-7 h-7" onClick={onOpen}>
        <Icon name="filter" className="w-7 h-7" />
      </button>

      <Dialog isOpen={isOpen} onClose={onClose}>
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Фильтры</h3>

          <button onClick={onClose}>
            <Icon name="close" className="w-6 h-6" />
          </button>
        </header>
      </Dialog>
    </div>
  )
}
