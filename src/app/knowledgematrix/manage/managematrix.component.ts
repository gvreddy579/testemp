/**
 * Created by lbd7nl1 on 03/10/2017.
 */

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Skills} from "../skills/skills.module";
import {SkillService} from "../skills/skills.service";
import {fadeInAnimation} from "../../animations/fade-in.animation";
import {AlertService} from "../../alert/alert.service";
import {Location} from "@angular/common";
import {ConfirmationService} from "primeng/components/common/confirmationservice";

@Component({
  templateUrl:"./managematrix.component.html",
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ManageMatrixComponent{

  parentPageId:number
  domainSkills:Skills[] = []
  skills:Skills[] = []
  domainId:string
  flag:number = -1
  frmSkill:Skills = new Skills()

  constructor(private ar:ActivatedRoute,private skillService:SkillService,private location:Location, private router:Router, private alertService:AlertService,private confirmationService:ConfirmationService){

    this.domainId = ar.snapshot.params["domainId"]
    this.parentPageId = ar.snapshot.params["pageId"]

    this.skillService.getSkills().subscribe(
      (resp)=> {
        this.skills = resp.json()
        for(let skill of this.skills){
          if(skill.domainId == this.domainId){
            this.domainSkills.push(skill)
          }
        }
      },
    (err)=> console.log(err)
    )

  }

  deleteSkill(id:string,index:number){
    //console.log("iddd",index)
    //console.log("End")
    //let isConfirm:boolean = window.confirm("Are you sure you want to delete this Product?")
    //if(isConfirm) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.skillService.deleteSkill(id).subscribe(
          (resp)=>{
            this.domainSkills.splice(index,1)
            this.alertService.success("Deleted Successfully")
          },
          (err)=>{console.log("Del Failed", err)
            this.alertService.error(err)}


        )
      }
    });

   // }
  }

  editSkill(selectedSkill:Skills,idx:number){
    console.log("in Edit",idx)
    this.flag = idx;
    Object.assign(this.frmSkill, selectedSkill);
    console.log(selectedSkill.framework)
  }

  saveSkill(){
    this.frmSkill.domainId = this.domainId
    this.skillService.addSkill(this.frmSkill).subscribe(
      (resp)=> {
        if(this.flag > 0){
          this.domainSkills[this.flag] = resp.json()
          this.flag = -1
        }
        else {
          this.domainSkills.push(resp.json())
        }
        this.alertService.success("Modifications Saved!")
      },
      (err) => {
        console.log("Save Failed:", err)
        this.alertService.error(err)
      }
    )
    this.frmSkill = new Skills()
  }

  goBack(){
    this.location.back()
   // this.router.navigate(['/manage',this.parentPageId]);
  }
}
