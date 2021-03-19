import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';




@NgModule({
  declarations: [StoreComponent, ProductItemComponent],
  imports: [
    CommonModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
