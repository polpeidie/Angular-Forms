import mysql from 'mysql2/promise'
import { Product } from '../interfaces/product';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'nike_db',
}

async function connectToDatabase() {
    const connection = await mysql.createConnection(config);
    return connection;
}

export class ProductModel {
    static async getAll () {
        const connection = await connectToDatabase()
        const [products] = await connection.query(
            'SELECT * FROM products'
        )

        return products
    }

    static async create (input: Product) {
        const {
            name,
            price,
            imageUrl
        } = input

        const connection = await connectToDatabase()

        const [result] = await connection.query(
            'SELECT * FROM products WHERE name = ?;', [name]
        )

        // Convert QueryResult to Product
        const products: Product[] = result as Product[]

        if (products.length !== 0) return null

        try {
            await connection.query(
                `INSERT INTO products (name, price, imageUrl) 
                VALUES (?, ?, ?);`, [name, price, imageUrl]
            )
        } catch (error) {
            throw new Error('Error creating product')
        }

        const [product] = await connection.query(
            `SELECT * FROM products WHERE name = ?`, [name]
        )

        return product
    }
}