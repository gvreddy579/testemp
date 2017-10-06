/**
 * Created by lbd7nl1 on 02/10/2017.
 */


import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";
@Injectable()
export class LoginGaurd implements CanActivate {

  constructor(private ls:LoginService){}

  canActivate(){
    return this.ls.getIsLoggedIn()
    //return true
  }
}
