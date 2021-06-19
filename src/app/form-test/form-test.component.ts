import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  public email = "";
  public password = "";
  public response1 = "";


  public firstName = "";
  public agree = false;
  public response2 = "";


  constructor() { }

  ngOnInit () {
  }

  public preventDefault (event: Event) {
    event.preventDefault();
  }

  public submitForm () {
    this.response1 = `Hi ${this.email} with password ${this.password.replace(/./g, '*')}!`;
  }

  public submitForm2 () {
    this.response2 = `Hi ${this.firstName}!`;
  }

  public isValid (value) {
    return value.length > 0;
  }
}
