import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  showResumenFacturacion = true;
  showDashboard = false;
  showTablasyParametros = false;
  
  constructor(private readonly router:Router){}

  showView(viewSelected:string) {
    switch (viewSelected) {
      case 'showResumenFacturacion':
        this.showResumenFacturacion = true;
        this.showDashboard = false;
        this.showTablasyParametros = false;
        break;
      case 'showDashboard':
        this.showResumenFacturacion = false;
        this.showDashboard = true;
        this.showTablasyParametros = false;
        break
      case 'showTablasyParametros':
        this.showResumenFacturacion = false;
        this.showDashboard = false;
        this.showTablasyParametros = true;
        break
      default:
        break;
    }
    
  }

  logout() {
    this.router.navigate(['login'])
  }

}
