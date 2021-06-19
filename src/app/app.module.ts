import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionTestComponent } from './action-test/action-test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CombinedTestComponent } from './combined-test/combined-test.component';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionTestComponent,
    FormTestComponent,
    CombinedTestComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
