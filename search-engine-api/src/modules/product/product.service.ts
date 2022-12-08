import { Product } from './product.interfaces'
import { getAllProducts } from './product.repository'
import { doesPartialMatch } from '../../utils/text-matcher'

export const searchProducts = (query: string = ''): Product[]=>{
    const products = getAllProducts()
    const results = products.filter(({title})=>doesPartialMatch(title, query))
    return results
}