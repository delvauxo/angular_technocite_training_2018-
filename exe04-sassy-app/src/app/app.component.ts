import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  products: Product[];

  constructor() {

    this.products = [
      new Product(
        'CM01-P',
        'Nike Flex 2017 RN Women\'s Running',
        'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/gwsmf2m7sz7rrahcxafa/flex-2017-rn-womens-running-shoe-zwkDRO.jpg',
        125,
        ['Lifestyle', 'Shoes']
      ),
      new Product(
        'CM01-R',
        'Nike Roshe One Women\'s Shoe',
        'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/h9fiolj4jjyj50n2tbqb/flex-2017-rn-womens-running-shoe-zwkDRO.jpg',
        119,
        ['Lifestyle', 'Shoes']
      ),
      new Product(
        'SW01-G',
        'FC BARCELONA TECH FLEECE WINDRUNNER',
        // tslint:disable-next-line:max-line-length
        'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/auhediiub4zkry0ciayo/veste-fc-barcelona-tech-fleece-windrunner-pour-KyTwz0PG.jpg',
        120,
        ['Lifestyle', 'Sweats']
      )
    ];

  }

  deleteProduct(product: Product) {
    console.log('deleteProduct - app', product);
    this.products = this.products.filter(item => item !== product);
  }

}
