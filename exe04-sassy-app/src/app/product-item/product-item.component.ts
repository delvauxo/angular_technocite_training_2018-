import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() SelectedProduct: EventEmitter<Product>;

  constructor() {
    this.SelectedProduct = new EventEmitter();
  }

  selectItem(product: Product) {
    console.log('Product Item', product);
    this.SelectedProduct.emit(product);
  }

  ngOnInit() {}

}
