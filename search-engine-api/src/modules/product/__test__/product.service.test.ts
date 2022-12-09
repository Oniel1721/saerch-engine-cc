import { searchProducts, getProductById } from '../product.service'
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

describe('getProductById', ()=>{
    test('Non existing product is null', ()=>{
        const product = getProductById('-1')
        expect(product).toBeNull()
    })

    test('Product found must be an object with number id same as requested', ()=>{
        const product = getProductById('5')
        expect(product).toBeInstanceOf(Object)
        expect(product).toHaveProperty('id')
        expect(product?.id).toBe(5)
    })
})