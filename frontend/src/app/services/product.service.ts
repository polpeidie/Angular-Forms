import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts (): Product[] {
    return this.productsList
  }

  addProduct (product: Product): void {
    this.productsList.push(product)
  }

}
