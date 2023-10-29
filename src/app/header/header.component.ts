import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
}

/* ngOnInit() {
  // JavaScript code for filtering
  document.querySelector('.search-button').addEventListener('click', function() {
    // Get user's search query
    const searchQuery = document.querySelector('.search-bar').value;

    // Perform search based on the query
    // Update result-container with filtered results
  });

  // Add event listener for checkbox changes
  const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
  filterCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const filterType = this.value;

      // Implement filtering logic based on the selected criteria
      // Update result-container with filtered results
    });
  });
}
 */




