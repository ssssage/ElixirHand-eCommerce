import { Component, OnInit, Input } from '@angular/core';
import { InterfaceProduct } from '../../shared/Interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: InterfaceProduct;

  constructor() { }

  ngOnInit(): void {
  }

  
}
