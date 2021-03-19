import { Component, OnInit} from '@angular/core';
import { InterfaceProduct } from '../shared/Interfaces/product';
import { StoreService } from './store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
 
  storeProducts: InterfaceProduct[];
  

  constructor(private storeService: StoreService) { }

  ngOnInit() {
       this.storeService.getProducts().subscribe(response => {
      this.storeProducts = response.data;
     }, error => {
      console.log(error);
    });
  }

}
