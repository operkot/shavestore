import { FC } from 'react'

import products from './products.mock.json'
import { IProduct } from '../types'
import { Button } from 'components'
import { ProductCard } from '../product-card'

export const ProductGrid: FC = () => {
  return (
    <section className="mb-6 last:mb-0">
      <div className="grid grid-cols-products gap-2 mb-6 last:mb-0">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button variant="primary" className="w-full">
        Загрузить еще
      </Button>
    </section>
  )
}
