import express from 'express'
import { productModule } from './modules'

const app = express()

app.use('/api/products', productModule)

app.get('/', (req, res) => {
    res.send('Everything ok!')
})

export default app