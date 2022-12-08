import { BrowserRouter, Route, Routes } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <h1>Products search engine</h1>
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


