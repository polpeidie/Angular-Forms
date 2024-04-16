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
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
    {
      id: '2',
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
    {
      id: '3',
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
    {
      id: '4',
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
    {
      id: '5',
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
    {
      id: '6',
      name: 'Air Force One',
      price: '120',
      imageURL: ''
    },
  ]

  getProducts (): Product[] {
    return this.productsList
  }

  addProduct (product: Product): void {
    this.productsList.push(product)
  }

}
