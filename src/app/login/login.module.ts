/**
 * Created by lbd7nl1 on 02/10/2017.
 */
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginService} from "./login.service";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LoginGaurd} from "./login.gaurd";
import {LogoutComponent} from "./logout.component";
import {AlertModule} from "../alert/alert.module";
@NgModule({
  declarations: [LoginComponent,LogoutComponent],
  exports: [LoginComponent,LogoutComponent],
  providers: [LoginService,LoginGaurd],
  imports: [RouterModule,HttpModule,FormsModule,CommonModule]
})
export class LoginModule{

  constructor(){}
}
