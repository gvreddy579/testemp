import {Employee} from "./employee.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by lbd7nl1 on 29/09/2017.
 */
@Injectable()
export class EmployeeService {

  private employees:Employee[] = [];

  employeeRestURL = "http://localhost:2403/wsemployee"

  constructor(private http:Http){
  }

  getEmployeeById(id:string){
    id = "b237718864465921"
  return this.http.get(this.employeeRestURL +"/"+id);

}

}
