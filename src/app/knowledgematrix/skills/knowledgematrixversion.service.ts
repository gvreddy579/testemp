import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {KnowledgeMatrixVersion} from "./knowledgematrixversion.model";
/**
 * Created by lbd7nl1 on 03/10/2017.
 */

@Injectable()
export class KnowledgeMatrixVersionService{

   URL = "http://localhost:2403/wsknowledgematrixversion"
  constructor(private http:Http){}

  createVersionForDomain(kmv:KnowledgeMatrixVersion){

    this.http.post(this.URL,kmv).subscribe(
      (data)=>{},
    (err)=> console.log(err)
    );

  }

}
