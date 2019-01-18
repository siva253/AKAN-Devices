import { ProductCategory } from "./ProductCategories";
import { ProductSubCategory } from "./ProductSubCategories";

export class Product{
    constructor(
      public name: string,
      public description: string,
      public category: ProductCategory,
      public subCategory:ProductSubCategory,
      public imgpath:string,
    ){  }
  }