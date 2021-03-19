import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfacePaging } from '../shared/Interfaces/paging';
//import { IProductType } from '../shared/productType';
//import { StoreParams } from '../shared/storeParams';
//import { IBrand } from '../shared/brand';
//import { InterfaceProduct } from '../shared/Interfaces/product';
//import { InterfacePaging, Paging } from '../shared/Interfaces/paging';
//import { map, delay } from 'rxjs/operators';
//import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }
  //useCache: boolean
  getProducts() {
    return this.http.get<InterfacePaging>(this.baseUrl + 'products?pageSize=50');
   
  }


 
}
