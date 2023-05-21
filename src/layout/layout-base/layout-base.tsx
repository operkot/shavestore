import { FC, ReactNode } from 'react'
import cn from 'classnames'

interface LayoutBaseProps {
  className?: string
  children: ReactNode
}

export const LayoutBase: FC<LayoutBaseProps> = ({ className, children }) => {
  return (
    <div className={cn('flex flex-col min-h-screen', className)}>
      <main>{children}</main>
    </div>
  )
}
