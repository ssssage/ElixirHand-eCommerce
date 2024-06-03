import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CartService } from '../../cart/cart.service';
import { InterfaceProduct } from '../../shared/Interfaces/product';
import { StoreService } from '../store.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: InterfaceProduct;
  quantity = 1;
  quantityInCart = 0;

  constructor(private storeService: StoreService,
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private cartService: CartService) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) this.storeService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
        this.cartService.cart$.pipe(take(1)).subscribe({
          next: cart => {
            const item = cart?.items.find(x => x.id === +id);
            if (item) {
              this.quantity = item.quantity;
              this.quantityInCart = item.quantity;
            }
          }
        })
      },
      error: error => console.log(error)
    })
  }

  updateCart() {
    if (this.product) {
      if (this.quantity > this.quantityInCart) {
        const itemsToAdd = this.quantity - this.quantityInCart;
        this.quantityInCart += itemsToAdd;
        this.cartService.addItemToCart(this.product, itemsToAdd);
      } else {
        const itemsToRemove = this.quantityInCart - this.quantity;
        this.quantityInCart -= itemsToRemove;
        this.cartService.removeItemFromCart(this.product.id, itemsToRemove);
      }
    }
  }

  get buttonText() {
    return this.quantityInCart === 0 ? 'Add to cart' : 'Update cart';
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) { this.quantity--; }



  }

 
}
