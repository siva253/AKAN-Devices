import { Component, OnInit } from '@angular/core';

import { ProductCategory } from '../Models/ProductCategories';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productCategoryEnum = ProductCategory;

  constructor() {
   }

  ngOnInit() {
    
  }

}
