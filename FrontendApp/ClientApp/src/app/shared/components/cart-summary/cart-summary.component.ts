import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../cart/cart.service';
import { ICart, ICartItem } from '../../interfaces/cart';
import { IOrderItem } from '../../models/order';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cart$: Observable<ICart>; 
  @Output() decrement: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() increment: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() remove: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Input() isCart = true;
  @Input() items: ICartItem[] | IOrderItem[] = [];
  @Input() isOrder = false;

  constructor() { }

  ngOnInit() {

    
  }

  decrementItemQuantity(item: ICartItem) {
    this.decrement.emit(item);
  }
   
  incrementItemQuantity(item: ICartItem) {
    this.increment.emit(item);
  }

  removeCartItem(item: ICartItem) {
    this.remove.emit(item);
  }

}
