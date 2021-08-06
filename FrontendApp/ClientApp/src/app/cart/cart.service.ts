import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {ICart, ICartItem, Cart, ICartTotals} from '../shared/Interfaces/cart';
import { InterfaceProduct } from '../shared/Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //setting up base url
  baseUrl = environment.apiUrl;

  //it will always emit initial value regardless it is null
  private cartSource = new BehaviorSubject<ICart>(null);

  //To make accessible above observable 
  cart$ = this.cartSource.asObservable();

  private cartTotalSource = new BehaviorSubject<ICartTotals>(null);

  cartTotal$ = this.cartTotalSource.asObservable();
  shipping = 0;
  
  // injecting http client
  constructor(private http: HttpClient) { }

  //This is will get cart item based on ID
  getCart(id: string){
    return this.http.get(this.baseUrl + 'cart?id=' + id)
     //use an RxJS reactive pipe (or data stream) to reshape the structure of data coming from the external API
    .pipe(
      map((cart: ICart) => {
        this.cartSource.next(cart);
        console.log(this.getCurrentCartValue())
      })
    );
  }

  
  setCart(cart: ICart){
    return this.http.post(this.baseUrl + 'cart', cart).subscribe((response: ICart) => {
      this.cartSource.next(response);
    }, error => {
      console.log(error);
    });
  }

  //get current value in cart without subscribing anything. Helper method
  getCurrentCartValue() {
    //whatever exist in current source it will return
    return this.cartSource.value;
  }

  addItemToCart(item: InterfaceProduct, quantity = 1) {
    const itemToAdd: ICartItem = this.mapProductItemToCartItem(item, quantity);
    const cart = this.getCurrentCartValue() ?? this.createCart();
    cart.items = this.addOrUpdateItem(cart.items, itemToAdd, quantity);
    this.setCart(cart);
  }

  private addOrUpdateItem(items: ICartItem[], itemToAdd: ICartItem, quantity: number): ICartItem[] {
    console.log(items);
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createCart(): ICart {
    const cart = new Cart();
    localStorage.setItem('cart_id', cart.id);
    return cart;
  }

  private mapProductItemToCartItem(item: InterfaceProduct, quantity: number): ICartItem {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      productBrand: item.productBrand,
      productType: item.productType
    };
}

}
