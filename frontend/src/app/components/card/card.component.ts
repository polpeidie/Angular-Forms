import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  isHovered = false

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: ''
  }

  constructor (private productService: ProductService, private router: Router) { }

  delete () {
    if (this.product.id) {
      this.productService.deleteProduct(this.product.id.toString()).subscribe(() => {
        this.router.navigate(['/products'])
        window.location.reload()
      },
      error => {
        console.error('Error deleting product:', error);
        // Handle error, e.g., display an error message to the user
      })
    }
  }
}
