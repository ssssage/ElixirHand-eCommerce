import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule), data: { breadcrumb: 'Store' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
