import { Component } from '@angular/core';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
email = '';
password = '';

  constructor(private authService: AuthService) { }

  login() {

    this.authService.login(
      this.email,
      this.password
    )

      .subscribe((result: any) => {

        console.log(result);
        localStorage.setItem(
          'token',
          result.token
        );

        alert('Login successful!');


      });

  }
}
