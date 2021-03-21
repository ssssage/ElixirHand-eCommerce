import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfacePaging } from '../shared/Interfaces/paging';
import { IProductType } from '../shared/productType';
import { map } from 'rxjs/operators';
import { IBrand } from '../shared/brand';



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number) {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

      if (typeId) {
        params = params.append('typeId', typeId.toString());
      }
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
