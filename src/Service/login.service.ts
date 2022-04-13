import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {

   }
  getuserdetails():Observable<any>{
    return this.httpClient.get('assets/user.json');
  }
}
