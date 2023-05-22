import { FC } from 'react'

import { LayoutBase } from 'layout'
import { Container } from 'components'
import { ProductGrid, ProductTools } from 'modules/product'

const Catalog: FC = () => {
  return (
    <LayoutBase className="bg-base-30">
      <Container className="px-4 py-6">
        <ProductTools />
        <ProductGrid />
      </Container>
    </LayoutBase>
  )
}

export default Catalog
