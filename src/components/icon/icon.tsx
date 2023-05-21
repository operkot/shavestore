import cn from 'classnames'
import { FC } from 'react'

import sprite from './sprite.svg'

interface IconProps {
  className?: string
  name: string
}

export const Icon: FC<IconProps> = props => {
  return (
    <svg className={cn('shrink-0', props.className)}>
      <use xlinkHref={`${sprite}#${props.name}`} />
    </svg>
  )
}
