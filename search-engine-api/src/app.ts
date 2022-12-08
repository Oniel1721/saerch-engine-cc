import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Everything ok!')
})

export default app