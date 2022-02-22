import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EngageService } from '../services/engage.service';
import { Injectable } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private engageService: EngageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('orders')) {
      return next.handle(req);
    }

    if (req.method === 'DELETE') {
      return next.handle(req);
    }

    if (req.url.includes('emailexists')) {
      return next.handle(req);
    }

    this.engageService.engage();

    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.engageService.pitty();
      })
    );
  }
}
