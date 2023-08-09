import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();


  showSpinner() {
    this.loadingSubject.next(true);
  }

  hideSpinner() {
    this.loadingSubject.next(false);
  }
}
