import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cwd } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ElixirHand Seller Servicess';
  shoppingProducts: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: any) => {

      //console.log(response);
      this.shoppingProducts = response.data;

    }, error =>
      {
        console.log(error)

    });
  }
  
  
}
