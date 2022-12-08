import { searchProducts } from '../product.service'
import { getAllProducts } from '../product.repository'

describe('searchProducts', ()=>{
    test('searchProduct and getAll products are same when not have query', ()=>{
        const serviceProducts = searchProducts()
        const repositoryProducts = getAllProducts()
        expect(serviceProducts.length).toBe(repositoryProducts.length)
    })

    test('searchProduct results title match with query', ()=>{
        const query = 'ti'
        const serviceProducts = searchProducts(query)
        const doesMatch = serviceProducts.every((product)=>product.title.toLowerCase().includes(query))
        expect(doesMatch).toBe(true)
    })
})