import { Router } from 'express'
import { ProductController } from '../controller/products'

export const createProductRouter = () => {
    const productRouter = Router()

    productRouter.get('/', ProductController.getAll)
    productRouter.post('/', ProductController.create)

    productRouter.delete('/:id', ProductController.delete)

    return productRouter
}