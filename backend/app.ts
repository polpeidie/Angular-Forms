import express, { json } from 'express'
import cors from 'cors'
import { createProductRouter } from './routes/products'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())
app.use(json())

app.use('/product', createProductRouter())

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})