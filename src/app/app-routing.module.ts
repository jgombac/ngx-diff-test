import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionTestComponent } from './action-test/action-test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CombinedTestComponent } from './combined-test/combined-test.component';
import { NewPageComponent } from './new-page/new-page.component';

const routes: Routes = [
  { path: 'new-page', component: NewPageComponent },
  { path: 'actions', component: ActionTestComponent },
  { path: 'forms', component: FormTestComponent },
  { path: 'combined', component: CombinedTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
