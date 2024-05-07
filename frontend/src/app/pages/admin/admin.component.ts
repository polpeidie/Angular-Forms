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
      id: 0,           // has to be lenght 9 all numbers
      name: '',
      price: 0,
      imageUrl:'',
    }
  }

  product: Product = {
    id: 0,           // has to be lenght 9 all numbers
    name: '',
    price: 0,
    imageUrl:'',
  }

  errors = {
    id: {
      isNull: false
    },
    name: {
      isNull: false
    },
    price: {
      isNaN: false,
      isNull: false
    }
  }

  onSubmit () {
    // ID VALIDATION
    if (this.product.id === null) {
      this.errors.id.isNull = true
      return
    } else {
      this.errors.id.isNull = false
    }

    // NAME VALIDATION
    if (this.product.name === null || this.product.name === '') {
      this.errors.name.isNull = true
      return
    } else {
      this.errors.name.isNull = false
    }

    // PRICE VALIDATION
    if (isNaN(this.product.price)) {  //  if price is not a number(NaN) return errors
      this.errors.price.isNaN = true
      return
    } else {
      this.errors.price.isNaN = false
    }

    if (this.product.price === null) {
      this.errors.price.isNull = true
      return
    } else {
      this.errors.price.isNull = false
    }


    this.clearErrors()
    // this.productService.addProduct(this.product)
    this.clearForm()
    
  }



  clearErrors () {
    this.errors.id.isNull = false
    this.errors.name.isNull = false
    this.errors.price.isNaN = false
    this.errors.price.isNull = false
  }
}
