/**
 * Created by lbd7nl1 on 03/10/2017.
 */

import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert.component";
import {AlertService} from "./alert.service";
import {RouterModule} from "@angular/router";
import {LoginModule} from "../login/login.module";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations:[AlertComponent],
  exports:[AlertComponent],
  providers:[AlertService],
  imports: [RouterModule,LoginModule,CommonModule]
})
export class AlertModule{}
