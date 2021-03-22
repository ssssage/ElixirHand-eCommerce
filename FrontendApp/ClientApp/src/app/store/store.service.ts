import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfacePaging } from '../shared/Interfaces/paging';
import { IProductType } from '../shared/productType';
import { map } from 'rxjs/operators';
import { IBrand } from '../shared/brand';
import { StoreParams } from '../shared/Interfaces/storeParams';




@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(storeParams: StoreParams) {
    let params = new HttpParams();

    if (storeParams.brandId !== 0) {
      params = params.append('brandId', storeParams.brandId.toString());
    }

    if (storeParams.typeId !== 0) {
      params = params.append('typeId', storeParams.typeId.toString());
    }

    if (storeParams.search) {
      params = params.append('search', storeParams.search);
    }

    params = params.append('sort', storeParams.sort);
    params = params.append('pageIndex', storeParams.pageNumber.toString());
    params = params.append('pageSize', storeParams.pageSize.toString());

      return this.http.get<InterfacePaging>(this.baseUrl + 'products', { observe: 'response', params })
        .pipe(map(response => { return response.body; }));
  }

  
  
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }


  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }


}
