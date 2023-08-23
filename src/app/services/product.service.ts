import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Response';

import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8090/api/products';

  getProducts(): Observable<Response<Array<Product>>> {
    return this.http.get(this.apiUrl);
  }

  getProduct(id: string): Observable<Response<Product>> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  removeProduct(productId?: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }

  getProductsByName(name: string): Observable<Response<Array<Product>>> {
    const params = { name };
    return this.http.get(this.apiUrl, { params });
  }


}
