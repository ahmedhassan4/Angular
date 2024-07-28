import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent , ProductListComponent, ProductDetailComponent , FeaturedBrandsComponent],
  templateUrl: './container-list.component.html',
  styleUrl: './container-list.component.css'
})
export class ContainerComponent {
  
  searchText:string = ""
  setSearchText(value:string){
    this.searchText = value
  }

  @ViewChild(ProductListComponent)
  ProductListComponent:ProductListComponent
}
