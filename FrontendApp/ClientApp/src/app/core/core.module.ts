import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopNavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopNavBarComponent]
})
export class CoreModule { }
