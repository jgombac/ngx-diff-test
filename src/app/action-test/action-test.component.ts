import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-test',
  templateUrl: './action-test.component.html',
  styleUrls: ['./action-test.component.scss']
})
export class ActionTestComponent implements OnInit {

  public checkbox1 = false;
  public checkbox2 = true;

  public showButton1 = false;
  public showButton2 = true;

  public dropdownValue = "Action";

  public radioValue = "option2";

  public textValue = "";

  public groupValue = "1";

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
    this.groupValue = "1";
  }

  public group2 () {
    this.groupValue = "2";
  }

  public group3 () {
    this.groupValue = "3";
  }

}
