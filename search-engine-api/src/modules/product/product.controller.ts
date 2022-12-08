import { Router } from 'express'
import { searchProducts } from './product.service'

const productController = Router()

productController.get('/search', async (req, res)=>{
    const products = await searchProducts(req.query.query as string)
    res.json(products)
})

export default productController