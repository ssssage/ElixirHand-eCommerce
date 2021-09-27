import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { CartService } from 'src/app/cart/cart.service';
import { ICart } from 'src/app/shared/Interfaces/cart';
import { IUser } from 'src/app/shared/Interfaces/user';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  cart$: Observable<ICart>;
  currentUser$: Observable<IUser>;

  constructor(private cartService: CartService, private accountService: AccountService) { }


  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }

}
