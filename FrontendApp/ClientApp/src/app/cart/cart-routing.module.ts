import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';

//setting up root inside here adding a single component
const routes: Routes = [
  {path: '', component: CartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }

