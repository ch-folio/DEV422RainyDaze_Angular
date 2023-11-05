import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from 'src/app/shared/models/Product';

@Injectable()
export class ProductService {
  products: any[] = [
    { name: 'Raincoat', price: 40, category: 'kids', size: 'small', color: 'yellow', imageUrl: '/assets/images/rainwear_photos/yellow_rain_coat.jpg' },
  ];

  getProducts():Product[] {
    return this.products;
  }
}






