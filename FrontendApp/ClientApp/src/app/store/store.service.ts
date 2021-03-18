import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfacePaging } from '../shared/Interfaces/paging';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<InterfacePaging>(this.baseUrl + 'products?pageSize=20')
  }
}
