import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'your-api-url';

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products?category=${category}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
}






