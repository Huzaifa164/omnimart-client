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

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({email: this.email, password: this.password}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.auth.storeToken(res.token);
        this.router.navigate(['/']);
      },
      error: err => alert(err.error.message)
    })
  }
}
