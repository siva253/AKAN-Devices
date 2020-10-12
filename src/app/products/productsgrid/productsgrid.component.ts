import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { Product } from '../../shared/Models/Product';

@Component({
  selector: 'app-productsgrid',
  templateUrl: './productsgrid.component.html',
  styleUrls: ['./productsgrid.component.css'],
  providers: [NgbPaginationConfig]
})
export class ProductsgridComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @Input('products') currentProducts: Product[];
  @Output('selectedProduct') selectedProduct = new EventEmitter();
  page = 1;
  pageCollectionSize: any;

  constructor(private breakpointObserver: BreakpointObserver,
    public config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.pageCollectionSize = (Math.floor((this.currentProducts.length / 6) * 10));
  }

  getSelectedProduct(product: Product) {
    this.selectedProduct.emit(product);
  }

}
