import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.scss']
})
export class BillingSummaryComponent {

  constructor(private readonly router:Router){}

  openCity(evt:any, cityName:any) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  logout() {
    this.router.navigate(['login'])
  }

}
