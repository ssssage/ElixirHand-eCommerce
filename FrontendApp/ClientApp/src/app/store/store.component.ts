import { Component, OnInit} from '@angular/core';
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
  storeProductTypes: IProductType[];
  brandIdSelected = 0;
  typeIdSelected = 0;
  sortSelected = 'name';
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
    this.storeService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected).subscribe(response => {
      this.storeProducts = response.data;
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
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.sortSelected = sort;
    this.getProducts();
  }
}
