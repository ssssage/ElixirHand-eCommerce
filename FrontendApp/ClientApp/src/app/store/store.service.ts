import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfacePaging } from '../shared/Interfaces/paging';
import { map } from 'rxjs/operators';
import { StoreParams } from '../shared/Interfaces/storeParams';
import { InterfaceProduct } from '../shared/Interfaces/product';
import { environment } from '../../environments/environment';
import { IBrand } from '../shared/models/brand';
import { IProductType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = environment.apiUrl;

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


  getProduct(id: number) {
    return this.http.get<InterfaceProduct>(this.baseUrl + 'products/' + id);
  }

  
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }


  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }


}
