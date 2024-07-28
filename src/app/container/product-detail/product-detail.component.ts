import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule, NgStyle } from '@angular/common';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, NgStyle, NgTemplateOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input()
  productListComp:ProductListComponent = undefined

  product:Product

  ngOnInit(){
    this.product = this.productListComp.selectedProduct
  }

}
