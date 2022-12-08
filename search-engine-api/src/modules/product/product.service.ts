import { Product } from './product.interfaces'
import { getAllProducts } from './product.repository'

export const searchProducts = (query: string = ''): Product[]=>{
    const products = getAllProducts()
    const results = products.filter(({title})=>{
        return title.toLowerCase().includes(query.toLowerCase())
    })
    return results
}