import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfacePaging } from '../shared/Interfaces/paging';
import { IBrand } from '../shared/brand';
import { IProductType } from '../shared/productType';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get<InterfacePaging>(this.baseUrl + 'products?pageSize=50');
  }



  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }

}
