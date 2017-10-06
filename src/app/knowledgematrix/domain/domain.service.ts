/**
 * Created by lbd7nl1 on 30/09/2017.
 */

import {Injectable} from "@angular/core";
import {DomainModel} from "./domain.model";
import {Http} from "@angular/http";
@Injectable()
export class DomainService{
  domains:DomainModel[] = [];
  domainURL = "http://localhost:2403/wsdomains"

  constructor(private http:Http){
  }

  getDomains(){
    return this.http.get(this.domainURL)
  }

  createDomain(newDomain:DomainModel){
    return this.http.post(this.domainURL,newDomain)
  }

  deleteDomain(id:string){
    return this.http.delete(this.domainURL+"/"+id)
  }
}
