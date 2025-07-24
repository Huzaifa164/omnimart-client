import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMsg = ''

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({email: this.email, password: this.password}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.auth.storeToken(res.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMsg = err.error.message || 'Login failed';
      }
    })
  }
}
