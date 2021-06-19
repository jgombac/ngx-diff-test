import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionTestComponent } from './action-test/action-test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CombinedTestComponent } from './combined-test/combined-test.component';

const routes: Routes = [
  { path: 'actions', component: ActionTestComponent },
  { path: 'forms', component: FormTestComponent },
  { path: 'combined', component: CombinedTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
