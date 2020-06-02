import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
   detailsflag = new BehaviorSubject<boolean>(false);
   detailsno = new BehaviorSubject<any>(-1);
   filterval=new BehaviorSubject<any>(new FormControl(''));
  
  constructor() { }
  flagtrue(i){
    this.detailsflag.next(true);
    this.detailsno.next(i);
  }
  filter(val){
    this.filterval.next(val);
  }
}
