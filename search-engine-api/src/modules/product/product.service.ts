import { Product } from './product.interfaces'
import { getAllProducts, getProductById as findProductById } from './product.repository'
import { doesPartialMatch } from '../../utils/text-matcher'

export const searchProducts = (query: string = ''): Product[]=>{
    const products = getAllProducts()
    const results = products.filter(({title})=>doesPartialMatch(title, query))
    return results
}

export const getProductById = (id: string): Product | null=>{
    const product = findProductById(parseInt(id))
    return product
}