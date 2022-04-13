import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LogactivateguardService implements CanActivate {
 role:any;
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.role=sessionStorage.getItem('role');
    if(this.role=='manager')
    return true;
    else
    {
      alert("You are not authorized to visit page");
      return false;
    }
  }
}
