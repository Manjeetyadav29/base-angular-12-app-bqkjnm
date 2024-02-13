import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployementDataDetailsComponent } from '../employement-data-details/employement-data-details.component';

const routes: Routes = [
  { path: 'employees', component: EmployementDataDetailsComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
