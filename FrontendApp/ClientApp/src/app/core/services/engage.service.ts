import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class EngageService {
  engageRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  engage() {
    this.engageRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'pacman',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    });
  }

  pitty() {
    this.engageRequestCount--;
    if (this.engageRequestCount <= 0) {
      this.engageRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
