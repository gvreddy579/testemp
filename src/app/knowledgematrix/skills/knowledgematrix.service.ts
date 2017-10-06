/**
 * Created by lbd7nl1 on 03/10/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {KnowledgeMatrix} from "./knowledgematrix.model";
import 'rxjs/add/operator/map'
import {isSuccess} from "@angular/http/src/http_utils";
@Injectable()
export class KnowledgeMatrixService{
  knowlegeMatrixURL = "http://localhost:2403/wsempknowledgematrix"
  static knowledgeMatrix:KnowledgeMatrix[] = []
  static filledDomianIds:string[] = []


  constructor(private http:Http){

  }

  doSave(kms:KnowledgeMatrix) {
    /*this.http.get(this.knowlegeMatrixURL).subscribe(
     (data)=>{this.knowledgeMatrix = data.json()
     console.log(this.knowledgeMatrix)
     }
     )*/
   return this.http.post(this.knowlegeMatrixURL,kms)
  }

  getKnowlegeMatrix(){
    return this.http.get(this.knowlegeMatrixURL)
  }
}
