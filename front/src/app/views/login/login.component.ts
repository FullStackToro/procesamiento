import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private dataService: ApiService,
    private readonly router: Router
  ){}

  formData = { username: '', password: '' };
  invalidCredentials = false

  onSubmit() {
    console.log("Llega al metodo", this.formData);
    this.dataService.getData(this.formData).subscribe(
      (response) => {
        console.log("RESPONSE LOGIN =======> ", response);
        this.router.navigate(['/billing'])
      },
      (error) => {
        if (error.status === 401 ) {
          this.invalidCredentials = true;
        }
        console.error('Error al obtener datos:', error);
      }
    );
    
  }

}
