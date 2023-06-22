import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './views/login/login.component';
import { BillingSummaryComponent } from './views/billing-summary/billing-summary.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableAndParametersComponent } from './views/table-and-parameters/table-and-parameters.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    BillingSummaryComponent,
    DashboardComponent,
    TableAndParametersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
