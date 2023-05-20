import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'assets/styles/index.css'
import { PATHS } from 'lib/navigation'
const Cart = lazy(() => import('pages/cart'))
const Catalog = lazy(() => import('pages/catalog'))
const Product = lazy(() => import('pages/product'))
const NotFound = lazy(() => import('pages/not-found'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Загрузка...">
        <Routes>
          <Route path={PATHS.HOME} element={<Catalog />} />
          <Route path={PATHS.CART} element={<Cart />} />
          <Route path={PATHS.PRODUCT} element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
