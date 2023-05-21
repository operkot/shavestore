import { FC } from 'react'
import { Link } from 'react-router-dom'

import { PATHS } from 'lib/navigation'
import { Container, Icon } from 'components'
import { CartIndicator } from 'modules/cart/components'

export const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 py-4 bg-white shadow-panel">
      <Container className="flex items-center justify-between px-4">
        <button>
          <Icon name="chevron-back" className="w-6 h-6" />
        </button>

        <img src="/img/logo.png" alt="" className="w-12 h-12" />

        <Link to={PATHS.CART}>
          <CartIndicator />
        </Link>
      </Container>
    </nav>
  )
}
