import express from 'express'
import cors from 'cors'
import { createProductRouter } from './routes/products'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})

app.use('/products', createProductRouter())

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})