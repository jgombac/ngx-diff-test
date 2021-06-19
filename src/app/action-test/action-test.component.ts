import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-test',
  templateUrl: './action-test.component.html',
  styleUrls: ['./action-test.component.scss']
})
export class ActionTestComponent implements OnInit {

  public checkbox1 = true;
  public checkbox2 = false;

  public showButton1 = true;
  public showButton2 = false;

  public dropdownValue = null;

  public radioValue = "option1";

  public textValue = "";

  constructor() { }

  ngOnInit () {
  }

  public button1 () {
    this.showButton1 = !this.showButton1;
  }

  public button2 () {
    this.showButton2 = !this.showButton2;
  }

  public dropdown (value) {
    this.dropdownValue = value;
  }

  public group1 () {

  }

  public group2 () {

  }

  public group3 () {

  }

}
