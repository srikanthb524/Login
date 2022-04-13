import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userinfo: any;
  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
    this._loginService.getuserdetails().subscribe(data=>{
      this.userinfo = data.users[0];
      console.log(this.userinfo)
      sessionStorage.setItem('role',this.userinfo.role);
    });
  }

}
