import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent, PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { ForpagingComponent } from './components/forpaging/forpaging.component';



@NgModule({
  declarations: [PagingHeaderComponent, ForpagingComponent],
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
    CarouselModule
  ]
})
export class SharedModule { }
