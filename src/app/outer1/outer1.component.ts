import { Component, OnInit } from '@angular/core';
import { ProductService } from '../apparel/product/product.service';
import { Product } from '../apparel/product/product';

@Component({
  selector: 'app-outer1',
  templateUrl: './outer1.component.html',
  styleUrls: ['./outer1.component.css']
})
export class Outer1Component implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products.filter(product => 
      product.category && product.category['name'] === 'Parkas'));
  }
}  



