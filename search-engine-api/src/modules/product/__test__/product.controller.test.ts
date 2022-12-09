import express from "express";
import request from "supertest";
import productController from '../product.controller'
import { doesPartialMatch } from "../../../utils/text-matcher";


describe("/api/products/search", () => {
    const app = express()
    app.use('/', productController) 
    test('Response with an Array', async ()=>{
        const res = await request(app).get('/search')
        expect(res.body).toBeInstanceOf(Array)
    })

    test('Response match with query', async ()=>{
        const res = await request(app).get('/search?query=ti')
        const result = res.body.every(({title}:any)=>doesPartialMatch(title, 'ti'))
        expect(result).toBe(true)
    })
});

describe("/api/products/search", () => {
    const app = express()
    app.use('/', productController) 
    test('Response with an Object with correct id', async ()=>{
        const { body: product } = await request(app).get('/5')
        expect(product).toBeInstanceOf(Object)
        expect(product).toHaveProperty('id')
        expect(product?.id).toBe(5)
    })

    test('Response with status 404 when not found', async ()=>{
        const { statusCode } = await request(app).get('/-5')
        expect(statusCode).toBe(404)
    })
});