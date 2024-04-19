import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor (private productService: ProductService) { }

  clearForm () {
    this.product = {
      id: '',           // has to be lenght 9 all numbers
      name: '',
      price: null,
      imageURL:'',
    }
  }

  product: Product = {
    id: '',           // has to be lenght 9 all numbers
    name: '',
    price: null,
    imageURL:'',
  }

  errors = {
    priceIsNaN: false
  }

  onSubmit () {
    if (isNaN(this.product.price)) {  //  if price is not a number(NaN) return errors
      this.errors.priceIsNaN = true
    } else {
      this.errors.priceIsNaN = false
      this.productService.addProduct(this.product)
      this.clearForm()
    }
  }
}
