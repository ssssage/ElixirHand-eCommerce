import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';



@NgModule({
  declarations: [TopNavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [TopNavBarComponent]
})
export class CoreModule { }
