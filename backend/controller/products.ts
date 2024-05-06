import { Request, Response } from 'express'
import { ProductModel } from '../model/product'

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

        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newProduct = await ProductModel.create(result.data)

        res.status(201).json(newProduct)
    }
}