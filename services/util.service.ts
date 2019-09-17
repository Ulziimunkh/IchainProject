import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  
  currentDate() {
    let ndate = new Date();
    return ndate;
 }
}
