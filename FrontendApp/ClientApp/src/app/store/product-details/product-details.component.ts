import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CartService } from '../../cart/cart.service';
import { InterfaceProduct } from '../../shared/Interfaces/product';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: InterfaceProduct;
  quantity = 1;

  constructor(private storeService: StoreService,
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private cartService: CartService) {
    this.bcService.set('@productDetails',' ');
  }

  ngOnInit(): void {
    this.loadProductDetail();
  }

  addItemToCart() {
    this.cartService.addItemToCart(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) { this.quantity--; }
    
  }

  loadProductDetail() {
    this.storeService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
  }

}
