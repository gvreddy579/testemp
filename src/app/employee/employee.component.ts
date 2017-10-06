/**
 * Created by lbd7nl1 on 29/09/2017.
 */


import {Component} from "@angular/core";
import {Employee} from "./employee.model";
import {EmployeeService} from "./employee.service";
@Component({
  templateUrl: "./employee.component.html"
})
export class EmployeeComponent{

  employee:Employee = new Employee("","","","","",false);

  constructor(private employeeService:EmployeeService){
    employeeService.getEmployeeById("lokesh").subscribe(
      (resp) => this.employee = resp.json(),
      (err) => console.log("Error Msg: "+err)
    )
  }
}
