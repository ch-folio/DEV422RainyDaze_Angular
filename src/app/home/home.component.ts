import { Component, OnInit } from '@angular/core';
import {ProductService} from '../apparel/product/product.service';
import {Product} from '../shared/models/Product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[] = [];
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}

/*         // JavaScript code for filtering
        document.querySelector('.search-button').addEventListener('click', function () {
          // Get user's search query
          const searchQuery = document.querySelector('.search-bar').value;

          // Perform search based on the query
          // Update result-container with filtered results
      });

      // Add event listener for checkbox changes
      const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
      filterCheckboxes.forEach(function (checkbox) {
          checkbox.addEventListener('change', function () {
              const filterType = this.value;

              // Implement filtering logic based on the selected criteria
              // Update result-container with filtered results
          });
      });
 */