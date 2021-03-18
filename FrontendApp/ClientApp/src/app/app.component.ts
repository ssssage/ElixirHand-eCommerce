import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceProduct } from './Interfaces/product';
import { InterfacePaging } from './Interfaces/paging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ElixirHand Seller Servicess';
  shoppingProducts: InterfaceProduct[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=10')
      .subscribe((response: InterfacePaging) => {

      //console.log(response);
      this.shoppingProducts = response.data;

    }, error =>
      {
        console.log(error)

    });
  }
  
  
}
