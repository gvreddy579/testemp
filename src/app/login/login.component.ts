/**
 * Created by lbd7nl1 on 02/10/2017.
 */

import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {AlertService} from "../alert/alert.service";
@Component({
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  isValidUsr:boolean = true;

  constructor(private ls:LoginService, private router:Router){
  }

  doLogin(username:string,password:string){
    if(this.ls.isValidUser(username,password)){
      this.router.navigate(['/home'])
    }
    else {
      this.isValidUsr = false;
    }
  }
}
