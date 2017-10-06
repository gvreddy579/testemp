import {Injectable} from "@angular/core";
/**
 * Created by lbd7nl1 on 02/10/2017.
 */

@Injectable()
export class LoginService{

  private isLoggedIn:boolean = false;

  isValidUser(usrname:string,pwd:string){

    if(usrname== "lbd7nl1"){
      if(pwd== "lbd7nl1"){
        this.setIsLoggedIn(true)
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  getIsLoggedIn(){
    return this.isLoggedIn;
    //return true
  }

  setIsLoggedIn(val:boolean){
    this.isLoggedIn = val
  }
}
