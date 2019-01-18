import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from "../../Models/Product";
import { ProductCategory } from "../../Models/ProductCategories";
import { PRODUCTS } from "../../Data/products-data";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Observable<Product[]>{
    return of(PRODUCTS);
  }

  getProductsOfCategory(category):Observable<Product[]>{
    return this.getProducts().pipe(
      map( (products:Product[]) => products.filter( p => p.category.toString() === category))
    );
  }
}
