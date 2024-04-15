import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  product: Product = {
    id: '',           // has to be lenght 9 all numbers
    name: '',
    price: '',
    imageURL:'',
  }
}
