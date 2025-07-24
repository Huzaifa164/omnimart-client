import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  onLogin() {
    this.auth.register({ name: this.name, email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.router.navigate(['/']);
      },
      error: err => alert(err.error.message)
    })
  }
}
