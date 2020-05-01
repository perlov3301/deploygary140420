import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
// holder that include result api
brews = {};
brewskeys = [];
githubwiki = 'https://perlov3301.github.io/getxmljson/wikijson.json';
githubgary = 'https://perlov3301.github.io/getxmljson/garyjson.json';
systems = [];
  constructor(
    private httpvar: HttpService
  ) { }

  ngOnInit(): void {
    this.httpvar.myMethod();
    this.httpvar.getBeer().subscribe(data => { // tutorial about observable
      this.brews = data;
      console.log(this.brews);
      const a = document.getElementById('api');
      this.brewskeys = Object.keys(this.brews);
      console.log('keys:' + this.brewskeys);
    });
    this.httpvar.getSystems().subscribe(data => { // tutorial about observable
      const a = Object.keys(data);
      console.log('general key for show array: ' + a);
      const c = 'sysarray';
      const b = data[c];
      console.log('array: ' + b);
      this.systems = b;
      console.log(this.systems);
    });
  }

}
