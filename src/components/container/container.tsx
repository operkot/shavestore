import { FC, ReactNode } from 'react'
import cn from 'classnames'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={cn('max-w-3xl w-full mx-auto', className)}>{children}</div>
)
