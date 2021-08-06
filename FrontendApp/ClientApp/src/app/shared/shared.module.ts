import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent, PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { ForpagingComponent } from './components/forpaging/forpaging.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';



@NgModule({
  declarations: [PagingHeaderComponent, ForpagingComponent, CartSummaryComponent, OrderTotalsComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    ForpagingComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
    CartSummaryComponent
  ]
})
export class SharedModule { }
