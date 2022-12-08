import { Product } from './product.interfaces'
import { getAllProducts } from './product.repository'

export const searchProducts = (query: string = ''): Product[]=>{
    return [getAllProducts()[0]]
}