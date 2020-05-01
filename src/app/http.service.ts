import { Injectable } from '@angular/core';
// working with public api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpvar: HttpClient) { }

  myMethod() {
    return console.log('Hello World from http.service.ts');
  }
  getBeer() {
    return this.httpvar.get('https://perlov3301.github.io/getxmljson/wikijson.json');
  }
  getSystems() {
    return this.httpvar.get('https://perlov3301.github.io/getxmljson/garyjson.json');
  }
}
