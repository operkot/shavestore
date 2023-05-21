import { FC, ReactNode, ElementType, HTMLAttributes } from 'react'
import cn from 'classnames'

import { BUTTON_DEFAULT_STYLES } from './lib/constants'
import { getBtnVariant } from './lib/utils'

interface ButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
  className?: string
  children?: ReactNode
  disabled?: boolean
  href?: string
  type?: string
  variant?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  as: Tag = 'button',
  className,
  children,
  disabled,
  href,
  type = 'button',
  variant = 'default',
  onClick,
}) => {
  const buttonType = Tag === 'button' ? type : undefined
  const buttonHref = Tag === 'a' ? href : undefined

  return (
    <Tag
      disabled={disabled}
      className={cn(BUTTON_DEFAULT_STYLES, getBtnVariant(variant), className)}
      href={buttonHref}
      type={buttonType}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
