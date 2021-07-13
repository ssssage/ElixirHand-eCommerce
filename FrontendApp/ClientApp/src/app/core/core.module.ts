import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BreadcrumbModule } from 'xng-breadcrumb';




@NgModule({
  declarations: [TopNavBarComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,   
    BreadcrumbModule,
    ToastNoAnimationModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    })
  ],
  exports: [
    TopNavBarComponent,
    SectionHeaderComponent
  ]
})
export class CoreModule { }
