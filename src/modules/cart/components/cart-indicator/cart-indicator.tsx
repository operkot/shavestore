import { FC } from 'react'

import { Icon } from 'components'

const amount = 1

export const CartIndicator: FC = () => {
  return (
    <div className="relative w-7 h-7 mt-1 mr-1">
      <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4.5 h-4.5 p-1 rounded-full bg-primary-0">
        <span className="text-xs text-center text-white">{amount}</span>
      </span>
      <Icon name="cart" className="w-7 h-7 fill-black" />
    </div>
  )
}
