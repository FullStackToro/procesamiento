import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './views/login/login.component';
import { BillingSummaryComponent } from './views/billing-summary/billing-summary.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableAndParametersComponent } from './views/table-and-parameters/table-and-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    BillingSummaryComponent,
    DashboardComponent,
    TableAndParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
