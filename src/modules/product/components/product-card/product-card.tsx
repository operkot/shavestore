import { FC } from 'react'

import { formatPriceToRub } from 'lib/currency'
import { IProduct } from '../types'

interface ProductCardProps {
  product: IProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white">
      {/* CARD LINK */}
      <a href="#" className="absolute inset-0 z-10" />

      {/* CARD THUMB */}
      <div className="relative pt-full">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="absolute inset-0 object-cover object-center"
        />
      </div>

      {/* CARD BODY */}
      <div className="p-3">
        {/* CARD TITLE */}
        <h3 className="mb-2 last:mb-0 text-sm line-clamp-2">{product.name}</h3>

        {/* CARD PRICE */}
        <span className="text-sm font-semibold leading-5 text-blue-500">
          {formatPriceToRub(product.price)}
        </span>
      </div>
    </article>
  )
}
