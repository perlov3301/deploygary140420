import { Component, OnInit } from '@angular/core';
// FormsModule is imported within app.module.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter = 0;
  name = '';

  constructor() { }

  ngOnInit(): void {
  }
  countClick() {
    this.clickCounter += 1;
  }
// toggle classes active1-notactive1
  setClasses1() {
    const myClasses = {
      active1: this.clickCounter > 4,
      notactive1: this.clickCounter <= 4,
    };
    return myClasses;
  }

}
