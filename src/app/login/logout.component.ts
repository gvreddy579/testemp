/**
 * Created by lbd7nl1 on 02/10/2017.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
@Component({
  template: ""
})
export class LogoutComponent{
  constructor(private router:Router,private ls:LoginService){
    this.ls.setIsLoggedIn(false)
    this.router.navigate(['/login'])
  }
}
