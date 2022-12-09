import express from 'express'
import cors from 'cors'
import { productModule } from './modules'

const app = express()
app.use(cors())
app.use('/api/products', productModule)

app.get('/', (req, res) => {
    res.send('Everything ok!')
})

export default app