import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageURL: ''
  }
}
