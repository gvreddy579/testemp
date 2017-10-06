/**
 * Created by lbd7nl1 on 04/10/2017.
 */

import {NgModule} from "@angular/core";
import {UploadMatrixComponent} from "./uploadmatrix.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FileUtilService} from "./fileutil.service";
import {AlertModule} from "../alert/alert.module";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [UploadMatrixComponent],
  exports: [UploadMatrixComponent],
  imports: [RouterModule, CommonModule, AlertModule,FormsModule],
  providers: [FileUtilService]
})
export class UploadMatrixModule{}
