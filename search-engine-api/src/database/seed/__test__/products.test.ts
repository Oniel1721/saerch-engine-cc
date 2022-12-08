import { readFileSync } from 'fs'
import { join } from 'path'

describe('Test products.json', ()=>{
    let products: any;
    
    test('Can product.json content parsed with JSON.parse', ()=>{
        const procuctsPath = join(__dirname,'../','products.json')
        products = JSON.parse(readFileSync(procuctsPath).toString())
    })
    
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