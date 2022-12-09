import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './features'

const routes = [
  {
    path: '/',
    element: <Product.SearchProductsPage />
  },
  {
    path: '/products/:id',
    element: <Product.SingleProductPage />
  }
]

export const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(route=>(
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}


