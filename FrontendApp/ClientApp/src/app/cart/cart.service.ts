import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem, Cart, ICartTotals } from '../shared/Interfaces/cart';
import { map } from 'rxjs/operators';
import { InterfaceProduct } from '../shared/Interfaces/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

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


  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentCartValue().id, {})
      .pipe(
        map((cart: ICart) => {
          this.cartSource.next(cart);
        })
      );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.shipping = deliveryMethod.price;
    const cart = this.getCurrentCartValue();
    cart.deliveryMethodId = deliveryMethod.id;
    cart.shippingPrice = deliveryMethod.price;
    this.calculateTotals();
    this.setCart(cart);
  }

  //This is will get cart item based on ID
  getCart(id: string){
    return this.http.get(this.baseUrl + 'cart?id=' + id)
     //use an RxJS reactive pipe (or data stream) to reshape the structure of data coming from the external API
    .pipe(
      map((cart: ICart) => {
        this.cartSource.next(cart);
        this.shipping = cart.shippingPrice;
        this.calculateTotals();
      })
    );
  }

  
  setCart(cart: ICart){
    return this.http.post(this.baseUrl + 'cart', cart).subscribe((response: ICart) => {
      this.cartSource.next(response);
      this.calculateTotals();
    }, error => {
      console.log(error);
    });
  }

  //get current value in cart without subscribing anything. Helper method
  getCurrentCartValue() {
    //whatever exist in current source it will return
    return this.cartSource.value;
  }

  addItemToCart(item: InterfaceProduct | ICartItem, quantity = 1) {
    if (this.isProduct(item)) item = this.mapProductItemToCartItem(item);
    const cart = this.getCurrentCartValue() ?? this.createCart();
    cart.items = this.addOrUpdateItem(cart.items, item, quantity);
    this.setCart(cart);
  }

  incrementItemQuantity(item: ICartItem) {
    const cart = this.getCurrentCartValue();
    const foundItemIndex = cart.items.findIndex(x => x.id === item.id);
    cart.items[foundItemIndex].quantity++;
    this.setCart(cart);
  }

  decrementItemQuantity(item: ICartItem) {
    const cart = this.getCurrentCartValue();
    const foundItemIndex = cart.items.findIndex(x => x.id === item.id);
    if (cart.items[foundItemIndex].quantity > 1) {
      cart.items[foundItemIndex].quantity--;
      this.setCart(cart);
    } else {
      this.removeItemFromCart(item.id);
    }
  }

  removeItemFromCart(id: number, quantity = 1) {
      const cart = this.getCurrentCartValue();
      if (!cart) return;
      const item = cart.items.find(x => x.id === id);
      if (item) {
        item.quantity -= quantity;
        if (item.quantity === 0) {
          cart.items = cart.items.filter(x => x.id !== id);
        }
        if (cart.items.length > 0) this.setCart(cart);
        else this.deleteCart(cart);
      }
    }

  deleteLocalCart(id: string) {
    this.cartSource.next(null);
    this.cartTotalSource.next(null);
    localStorage.removeItem('cart_id');
  }

  deleteCart(cart: ICart) {
    return this.http.delete(this.baseUrl + 'cart?id=' + cart.id).subscribe(() => {
      this.cartSource.next(null);
      this.cartTotalSource.next(null);
      localStorage.removeItem('cart_id');
    }, error => {
      console.log(error);
    });
  }

  private calculateTotals() {
    const cart = this.getCurrentCartValue();
    const shipping = this.shipping;
    const subtotal = cart.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.cartTotalSource.next({ shipping, total, subtotal });
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

  private mapProductItemToCartItem(item: InterfaceProduct): ICartItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      quantity: 0,
      pictureUrl: item.pictureUrl,
      brand: item.productBrand,
      type: item.productType
    }
  }


  private isProduct(item: InterfaceProduct | ICartItem): item is InterfaceProduct {
    return (item as InterfaceProduct).productBrand !== undefined;
  }
}



