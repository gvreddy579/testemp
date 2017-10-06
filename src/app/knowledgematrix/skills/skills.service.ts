/**
 * Created by lbd7nl1 on 02/10/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Skills} from "./skills.module";
@Injectable()
export class SkillService{
  skillURL = "http://localhost:2403/wsdomainskills"
  constructor(private http:Http){}

  getSkills(){
    return this.http.get(this.skillURL);
  }

  getSkillById(idx:string){
    return this.http.get(this.skillURL+"/"+idx)
  }

  deleteSkill(idx:string){
    return this.http.delete(this.skillURL+"/"+idx)
  }

  addSkill(skill:Skills){
    return this.http.post(this.skillURL,skill)
  }

}
