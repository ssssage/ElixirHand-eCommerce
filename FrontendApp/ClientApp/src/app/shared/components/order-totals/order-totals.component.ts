import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {

  
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
