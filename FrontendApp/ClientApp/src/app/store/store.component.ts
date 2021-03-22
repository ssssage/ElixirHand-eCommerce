import { Component, OnInit} from '@angular/core';
import { IBrand } from '../shared/brand';
import { InterfaceProduct } from '../shared/Interfaces/product';
import { StoreParams } from '../shared/Interfaces/storeParams';
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
  storeProductTypes: IProductType[];
  storeParams = new StoreParams();
  totalCount: number;

    sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: High to Low', value: 'priceDesc' },
    { name: 'Price: Low to High', value: 'priceAsc' }
    
  ];
  

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.storeService.getProducts(this.storeParams).subscribe(response => {
      this.storeProducts = response.data;
      this.storeParams.pageNumber = response.pageIndex;
      this.storeParams.pageSize = response.pageSize;
      this.totalCount = response.count;

    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.storeService.getBrands().subscribe(response => {
      this.storeBrands = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  getProductTypes() {
    this.storeService.getProductTypes().subscribe(response => {
      this.storeProductTypes = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    this.storeParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.storeParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.storeParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any) {
    this.storeParams.pageNumber = event.page;
    this.getProducts();
    }
  
}
