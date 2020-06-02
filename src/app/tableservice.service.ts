import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
   detailsflag = new BehaviorSubject<boolean>(false);
   detailsno = new BehaviorSubject<any>(-1);

  
  constructor() { }
  flagtrue(i){
    this.detailsflag.next(true);
    this.detailsno.next(i);
  }
}
