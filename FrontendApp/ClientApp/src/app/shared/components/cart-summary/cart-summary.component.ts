import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../../cart/cart.service';
import { ICart, ICartItem } from '../../Interfaces/cart';
import { IOrderItem } from '../../models/order';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  @Output() addItem = new EventEmitter<ICartItem>();
  @Output() removeItem = new EventEmitter<{ id: number, quantity: number }>();
  @Input() isCart = true;
  constructor(public cartService: CartService) { }
  ngOnInit(): void {
  }
  addCartItem(item: ICartItem) {
    this.addItem.emit(item);
  }
  removeCartItem(id: number, quantity = 1) {
    this.removeItem.emit({ id, quantity });
  }
}

