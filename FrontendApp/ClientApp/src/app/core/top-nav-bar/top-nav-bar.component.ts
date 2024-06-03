import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { CartService } from 'src/app/cart/cart.service';
import { ICartItem } from 'src/app/shared/Interfaces/cart';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

 
  constructor(public cartService: CartService, public accountService: AccountService) { }


  ngOnInit(): void {
    
  }

  getCount(items: ICartItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }


  logout() {
    this.accountService.logout();
  }

}
