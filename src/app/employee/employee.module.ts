/**
 * Created by lbd7nl1 on 29/09/2017.
 */

import {NgModel} from "@angular/forms";
import {EmployeeComponent} from "./employee.component";
import {NgModule} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {HttpModule} from "@angular/http";
@NgModule({
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
  providers: [EmployeeService],
  imports: [HttpModule]
})
export class EmployeeModule{}
