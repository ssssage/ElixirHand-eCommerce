import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/brand';
import { InterfaceProduct } from '../shared/Interfaces/product';
import { IProductType } from '../shared/productType';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  storeProducts: InterfaceProduct[];
  storeBrands: IBrand[];
  storeProductType: IProductType[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
      this.storeService.getProducts().subscribe(response => {
        this.storeProducts = response.data
      }, error => {
        console.log(error)

      });
  }

  getBrands() {
    this.storeService.getBrands().subscribe(response => {
      this.storeBrands = response;
    }, error => {
      console.log(error)

    });
  }

  getProductTypes() {
    this.storeService.getProductTypes().subscribe(response => {
      this.storeProductType = response;
    }, error => {
      console.log(error)

    });
  }

}
