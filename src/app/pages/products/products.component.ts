import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
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
}
