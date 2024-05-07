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
      name: '',
      price: 0,
      imageUrl:'',
    }
  }

  product: Product = {
    name: '',
    price: 0,
    imageUrl: ''
  }

  errors = {
    name: {
      isNull: false
    },
    price: {
      isNaN: false,
      isNull: false
    },
    imageUrl: {
      isNull: false
    }
  }

  onSubmit () {
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

    // URL VALIDATION
    if (this.product.imageUrl === null || this.product.imageUrl === '') {
      this.errors.imageUrl.isNull = true
      return
    } else {
      this.errors.imageUrl.isNull = false
    }


    this.clearErrors()
    // It is important to use the subscribe method, otherwise it won't work
    this.productService.createProduct(this.product).subscribe(() => {
      console.log('Product created.')
    })

    this.clearForm()
  }



  clearErrors () {
    this.errors.name.isNull = false
    this.errors.price.isNaN = false
    this.errors.price.isNull = false
    this.errors.imageUrl.isNull = false
  }
}
