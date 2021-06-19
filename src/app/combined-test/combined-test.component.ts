import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined-test',
  templateUrl: './combined-test.component.html',
  styleUrls: ['./combined-test.component.scss']
})
export class CombinedTestComponent implements OnInit {

  public email = "";
  public password = "";
  public response1 = "";

  public showButton1 = true;
  public showButton2 = false;


  constructor() { }

  ngOnInit () {
  }

  public preventDefault (event: Event) {
    event.preventDefault();
  }

  public submitForm () {
    this.response1 = `Hi ${this.email} with password ${this.password}!`;
  }

  public button1 () {
    this.showButton1 = !this.showButton1;
  }

  public button2 () {
    this.showButton2 = !this.showButton2;
  }
}
