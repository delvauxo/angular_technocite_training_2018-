// CONTROLLER

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() SelectedProduct: EventEmitter<Product>;

  constructor() {
    this.SelectedProduct = new EventEmitter();
  }

  selectProduct(product) {
    this.SelectedProduct.emit(product);
    console.log('Product-list', product);
  }

  ngOnInit() {
  }

}
