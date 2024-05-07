import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiEndpoint = 'http://localhost:3000/product'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndpoint)
  }

  createProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiEndpoint, product, this.httpOptions)
  }

}
