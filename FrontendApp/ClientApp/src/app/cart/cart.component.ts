import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../shared/Interfaces/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //cart$: Observable<ICart>;
  //cartTotals$: Observable<ICartTotals>;
  ngOnInit(): void {

  }

  constructor(public cartService: CartService) { }
  incrementQuantity(item: ICartItem) {
    this.cartService.addItemToCart(item);
  }
  removeItem(event: { id: number, quantity: number }) {
    this.cartService.removeItemFromCart(event.id, event.quantity);
  }
}
