import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/cart.service';
import { ICart } from '../../shared/Interfaces/cart';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  cart$: Observable<ICart>;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
  }

}
