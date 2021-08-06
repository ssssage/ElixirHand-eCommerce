import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { InterfaceProduct } from '../../shared/Interfaces/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: InterfaceProduct;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {

  }

  addItemToCart() {
    this.cartService.addItemToCart(this.product);
  }
  
}
