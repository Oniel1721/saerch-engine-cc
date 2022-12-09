import { products } from '../products'

describe('Test products.json', ()=>{
    
    test('Products is an array', ()=>{
        expect(products).toBeInstanceOf(Array)
    })

    test('There are at least 5 products', ()=>{
        expect(products.length).toBeGreaterThanOrEqual(5)
    })

    test('All products are objects with expected properties', ()=>{
        for(const product of products){
            expect(product).toBeInstanceOf(Object)
            expect(product).toHaveProperty('id')
            expect(product).toHaveProperty('title')
            expect(product).toHaveProperty('shortDescription')
            expect(product).toHaveProperty('description')
            expect(product).toHaveProperty('photo')
        }
    })


})