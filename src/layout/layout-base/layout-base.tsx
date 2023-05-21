import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { Navbar } from 'layout/navbar'

interface LayoutBaseProps {
  className?: string
  children: ReactNode
}

export const LayoutBase: FC<LayoutBaseProps> = ({ className, children }) => {
  return (
    <div className={cn('flex flex-col min-h-screen pt-20', className)}>
      <Navbar />

      <main>{children}</main>
    </div>
  )
}
