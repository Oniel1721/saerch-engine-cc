import { products } from '../../database/seed/products'
import { Product } from "./product.interfaces"

export const getAllProducts = (): Product[]=>{
    return JSON.parse(JSON.stringify(products)) as Product[]
}

export const getProductById = (id: number): Product | null=>{
    const products = getAllProducts()
    const product = products.find((product)=>product.id === id)
    return product ?? null
}