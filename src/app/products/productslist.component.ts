import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductCategory } from '../Models/ProductCategories';
import { ProductService } from '../service/products/product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css'],
  providers: [NgbPaginationConfig]
})
export class ProductslistComponent implements OnInit {
  page = 1;
  pageCollectionSize: any;
  productsList:Product[] = [];
  currentCategory: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  productcategory:ProductCategory;
  currentSubCategory:string[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private service: ProductService, 
    public dialog: MatDialog, 
    public config: NgbPaginationConfig, 
    private breakpointObserver: BreakpointObserver) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;  
  }

  ngOnInit() {
    if (this.route.snapshot.url[0].path == 'products') {
      let urlProductCategory = this.route.snapshot.url[1].path;

      switch(urlProductCategory) {
        case ProductCategory.BiometricAndSecurity: { 
          this.productcategory = ProductCategory.BiometricAndSecurity; 
          this.currentCategory = "Biometric And Security";
          break; 
        } 
        case ProductCategory.HardwareDevices: { 
          this.productcategory = ProductCategory.HardwareDevices;
          this.currentCategory = "Hardware Devices";
          break; 
        }
        case ProductCategory.Iot: { 
          this.productcategory = ProductCategory.Iot;
          this.currentCategory = "IOT";
          break; 
        } 
        default: { 
          this.router.navigateByUrl('/products');
          break; 
        } 
     }
     
      this.service.getProductsOfCategory(this.productcategory).subscribe(
        res => this.productsList = res
      );

      this.currentSubCategory = Array.from(new Set(this.productsList.map((item: Product) => item.subCategory)));
      //pagination items/page
      this.pageCollectionSize = (Math.floor((this.productsList.length / 6) * 10));
    }
    else{
      this.router.navigateByUrl('/home');
    }
  }

  filterProducts(subCat): Product[]{

    let a =  this.productsList.filter( p => p.subCategory.toString() === subCat );
    return a;
  }
  getPageCollectionSize(subCat){
    return (Math.floor((this.productsList.filter( p => p.subCategory.toString() === subCat ).length / 6) * 10));
  }

  getSelectedProduct(selectedProduct: Product) {
    this.openProductDetails(selectedProduct);
  }

  openProductDetails(product: Product): void {
    const dialogRef = this.dialog.open(ProductdetailsComponent, {
      disableClose: true,
      width: '600px',
      data: { name: product.name, imagepath: product.imgpath }
    });
  }

}

@Component({
  selector: 'app-product-details',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
  //  styles:['']
})
export class ProductdetailsComponent {
  constructor(public productdetalisRef: MatDialogRef<ProductdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) {

  }

}
