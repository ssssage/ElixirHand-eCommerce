import { Component, OnInit } from '@angular/core';
import { InterfaceProduct } from './shared/Interfaces/product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ElixirHand Seller Servicess';
  storeProducts: InterfaceProduct[];

 
  constructor() { }

  ngOnInit(): void {
  
  }
  
  
}
