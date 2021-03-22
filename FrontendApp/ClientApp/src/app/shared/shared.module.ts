import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { ForpagingComponent } from './components/forpaging/forpaging.component';



@NgModule({
  declarations: [PagingHeaderComponent, ForpagingComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    ForpagingComponent
  ]
})
export class SharedModule { }
