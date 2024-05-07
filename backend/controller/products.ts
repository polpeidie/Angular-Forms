import { Request, Response } from 'express'
import { ProductModel } from '../model/product'
import { Product } from '../interfaces/product'

export class ProductController {
    static async getAll (req: Request, res: Response) {
        res.header('Access-Control-Allow-Origin', '*')

        const products = await ProductModel.getAll()

        res.status(200).json(products)
    }

    static async create (req: Request, res: Response) {
        res.header('Access-Control-Allow-Origin', '*')

        // TODO: Falta validar body validateProduct()
        const result = req.body


        if (result === null) {
            res.status(400).json({ message: 'No product data was provided.' })
        }

        const newProduct = await ProductModel.create(result as Product)

        if (newProduct === null) return res.status(409).json({ message: 'Resource already exists' })

        res.status(201).json(newProduct)
    }
}