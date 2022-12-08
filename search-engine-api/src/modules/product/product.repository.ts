import { readFileSync } from 'fs'
import { join } from 'path'
import { Product } from "./product.interfaces"

export const getAllProducts = (): Product[]=>{
    const productPath = join(process.cwd(), 'src', 'database', 'seed', 'products.json')
    const products = JSON.parse(readFileSync(productPath).toString())
    return products
}

export const getProductById = (id: number): Product | null=>{
    const products = getAllProducts()
    const product = products.find((product)=>product.id === id)
    return product ?? null
}