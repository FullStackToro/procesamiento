import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { BillingSummaryComponent } from './views/billing-summary/billing-summary.component';
import { TableAndParametersComponent } from './views/table-and-parameters/table-and-parameters.component';


const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:'billing', component: BillingSummaryComponent},
  {path:'table-and-parameters', component: TableAndParametersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
