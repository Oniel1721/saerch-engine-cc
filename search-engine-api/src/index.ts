import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Everything ok!')
})

app.listen(5500, () => {
    console.log('Server on port 5500')
})