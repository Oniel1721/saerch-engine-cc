import { Router } from 'express'
import { searchProducts, getProductById } from './product.service'

const productController = Router()

productController.get('/search', async (req, res)=>{
    const products = await searchProducts(req.query.query as string)
    res.json(products)
})

productController.get('/:id', async (req, res)=>{
    const products = await getProductById(req.params.id)
    if(!products) return res.status(404).send({ error: 'Product not found' })
    res.json(products)
})

export default productController