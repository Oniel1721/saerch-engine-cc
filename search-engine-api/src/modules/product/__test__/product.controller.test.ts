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