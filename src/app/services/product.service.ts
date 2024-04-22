import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productsList: Product[] = [
    {
      id: '1',
      name: 'Nike Air Max Dn',
      price: '169.99',
      imageURL: './assets/images/products/air_max_dn.png'
    },
    {
      id: '2',
      name: 'Nike Air Max Plus Drift',
      price: '199.99',
      imageURL: './assets/images/products/air_max_plus_drift.png'
    },
    {
      id: '3',
      name: 'Nike Air Max 90',
      price: '159.99',
      imageURL: './assets/images/products/air_max_90.png'
    },
    {
      id: '4',
      name: 'Nike Air Max Plus',
      price: '189.99',
      imageURL: './assets/images/products/air_max_plus.png'
    },
    {
      id: '5',
      name: 'Nike Air Max Plus 3',
      price: '149.99',
      imageURL: './assets/images/products/air_max_plus_3.png'
    },
    {
      id: '6',
      name: 'Air Force One 1\'07 Next Nature',
      price: '119.99',
      imageURL: './assets/images/products/air_force_one.png'
    },
  ]

  getProducts (): Product[] {
    return this.productsList
  }

  addProduct (product: Product): void {
    this.productsList.push(product)
  }

}
