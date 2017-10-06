/**
 * Created by lbd7nl1 on 29/09/2017.
 */

import {Component} from "@angular/core";
import {LoginService} from "../login/login.service";
@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  appName:string = "Knowledge Matrix"
  createScreen:number = 1;
  modifyScreen:number = 2;
    constructor(private ls:LoginService){
    }

    isUserLoggedIn(){
      return this.ls.getIsLoggedIn()
    }
}
