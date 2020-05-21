import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  atext = 'Hello';
  a1 = null ?? 'hi';
  a2 = undefined ?? 'hey';
  a3 = false ?? 'hola';
  a4 = null ?? 'first' ?? 'second';
  a5 = null ?? undefined ?? 'third';
  a6 = 0 ?? 'bonjour';
  a7 = 'first' ?? 'second';
  a8 = undefined ?? { name: 'alex' };
  a81 = Object.keys(this.a8)[0];
  a10;
  a9 = this.a10 ?? { name: 'alex' };
  isActive = false;
  a11 = this.isActive ?? true;
  a12 = null ?? undefined ?? false ?? 'hello';
  a13 = null ?? '' ?? 'hello';
  myurl1 = 'https://perlov3301.github.io/getxmljson/wikijson.json';
  myurl2 = 'https://perlov3301.github.io/getxmljson/garyjson.json';
  a14;
  a15isloaded = false;
  a16havespose = false;
  post1 = async (url = '', data = {}) => {
    const request = new Request(url, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: '{"foo":    "bar"}'
      //    '{"foo":    "bar"}'
    });
    console.log('posturl=' + request.url);
    console.log('postmethod=' + request.method);
    console.log('postcredentials=' + request.credentials);
    console.log('postbody=' + request.body);
    console.log('postbodyused=' + request.bodyUsed);
    // const response = await fetch(request);
    // return response.json(); // parses into JS objects
  }
  firstblog = async (myurl) => {
    const myjson = await fetch(myurl)
      .then(response => response.json())
      .then(data => {
        console.log('firstblog=' + data);
        this.a15isloaded = true;
        this.a14 = data;
      });
    console.log(this.a14);
  }

  hello = async () => 'Hello Wolrd';
  hello1 = () => 'Hello World';


  ngOnInit(): void {
    async function fhello() { return 'Hello world'; }
    function fhello1() { return 'Hello World'; }
    this.hello();
    this.post1(this.myurl1, { spouse: 'fromYou' })
      .then(data => {
        console.log('this.postdata=' + data); // JSON data parsed by `response.json()` call
      });
    this.firstblog(this.myurl1);
  }

}
    // method: 'POST', // GET*
      // mode: 'cors', // *
      // cache: 'no-cache', // default is default, reload, force-cache
      // credentials: 'same-origin', // *=same-origin, include, omit
      // headers: {
      //   'Content-Type': 'application/json',
      //   // 'Content-Type': 'application/x-www-form-urlencoded'
      // },
      // redirect: 'follow', // *=follow, manual, error
      // body: JSON.stringify(data)
      // for checking backend app
      // let allowCrossDomain = function(req, res, next) {
      //   res.header('Access-Control-Allow-Origin', "*");
      //   res.header('Access-Control-Allow-Headers', "*");
      //   next();
      // }
      // app.use(allowCrossDomain);
