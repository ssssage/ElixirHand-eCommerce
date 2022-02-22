import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper';
import { CartService } from '../../cart/cart.service';
import { ICart } from '../../shared/Interfaces/cart';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  cart$: Observable<ICart>;

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
  }

  createPaymentIntent() {
    return this.cartService.createPaymentIntent().subscribe((response: any) => {
      this.toastr.success('Payment intent created');
      this.appStepper.next();
    }, error => {
      console.log(error);
      this.toastr.error(error.message);
    });
  }

}

