import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  initSearch(): void {
    const search = document.getElementById('search') as HTMLElement;
    const searchContainer = document.getElementById('search-container') as HTMLElement;

    search.addEventListener('click', function() {
      if (searchContainer.style.display === 'none') {
        searchContainer.style.display = 'block';
      } 
      else {
        searchContainer.style.display = 'none';
      }
    
  });

  }
  ngOnInit(): void {
    window.addEventListener("load", () => {
   
      this.initSearch();
    });
  }

  
}

