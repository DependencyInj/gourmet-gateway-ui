import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderBarService {

  loaderBarSubject = new Subject<boolean>();

  constructor() { }

  show(){
    this.loaderBarSubject.next(true);
  }

  hide(){
    this.loaderBarSubject.next(false);
  }

}
