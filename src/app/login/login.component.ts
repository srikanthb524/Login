import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userinfo: any;
  emailInput: any;
  passwordInput: any;
  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {
    this._loginService.getuserdetails().subscribe((data) => {
      this.userinfo = data.users;
    });
  }
  login() {
    for (let i = 0; i < this.userinfo.length; i++) {
      if (
        this.emailInput == this.userinfo[i].username &&
        this.passwordInput == this.userinfo[i].password
      ) {
        sessionStorage.setItem('role', this.userinfo[i].role);
        this._router.navigateByUrl('empall');
      } else {
        alert('Failed');
      }
    }
  }
}
