/**
 * Created by lbd7nl1 on 29/09/2017.
 */

import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {LoginService} from "../login/login.service";
import {LoginModule} from "../login/login.module";
import {CommonModule} from "@angular/common";
import {UploadMatrixModule} from "../bulkupload/uploadmatrix.module";
@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [RouterModule,LoginModule,CommonModule, UploadMatrixModule]
})
export class HeaderModule{}
