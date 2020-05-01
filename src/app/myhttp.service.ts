import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor() { }
  myconsole() {
    return console.log('hello world from myhttp.servece.ts');
  }
}
