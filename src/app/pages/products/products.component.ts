import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  
  constructor( private productService: ProductService ) { }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  products!: Product[]
}
