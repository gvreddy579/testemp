import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillService} from "./skills.service";
import {Skills} from "./skills.module";
import {routerNgProbeToken} from "@angular/router/src/router_module";
import {KnowledgeMatrix} from "./knowledgematrix.model";
import {KnowledgeMatrixService} from "./knowledgematrix.service";
import {AlertService} from "../../alert/alert.service";
import {KnowledgeMatrixVersion} from "./knowledgematrixversion.model";
import {KnowledgeMatrixVersionService} from "./knowledgematrixversion.service";
/**
 * Created by lbd7nl1 on 02/10/2017.
 */
@Component({
  templateUrl: "matrix.component.html"
})
export class MatrixComponent {

  skills:Skills[] =[]
  skillsForDomain:Skills[] = []
  knowledgeMatrix:KnowledgeMatrix[] = []
  knowledgeMatrixVersion:KnowledgeMatrixVersion
  domainId:string
  parentPageId:number
  toolTipData:string = "0 - No knowledge at all.&#013;1 - You have been trained, but no hands on, so you definitively need coaching.&#013; 2 - You have been trained, little hands on, so you probably still need coaching.&#013;3 - You have been trained, have hands on and can work independently&#013;4 - You have been trained, have hands on, can work independently and feels comfortable to coach other developers"

  constructor(private ar:ActivatedRoute, private alertService:AlertService, private skillService:SkillService, private router:Router,private kms:KnowledgeMatrixService, private kmvs:KnowledgeMatrixVersionService){
    this.domainId= ar.snapshot.params["domainId"]
    this.parentPageId = ar.snapshot.params["pageId"]
    console.log(this.parentPageId)
    this.skillService.getSkills().subscribe(
      (data) => {this.skills = data.json()

        console.log(this.skills)
        for(let skill of this.skills){
          if(skill.domainId == this.domainId){
            let km = new KnowledgeMatrix();
           km.empid = "b237718864465921"
            km.name = "Lokesh"
            km.domain = skill.domainName
            km.teamManager = "Aruna"
            km.hod = "Sharath"
            km.team = "BIAPPL"
            km.framework = skill.framework
            km.knowledgeArea = skill.skillName
           this.knowledgeMatrix.push(km)
          }
        }
        console.log("km ",this.knowledgeMatrix)
      },
      (err) => console.log(err)
    )

  }

  goBack():void {
    this.router.navigate(['/create',this.parentPageId])
  }

  doSave(knowledgeMatrix:KnowledgeMatrix[]):void {
    console.log("in component", knowledgeMatrix)
    let isSuccess = false;
    for (let km of knowledgeMatrix) {
      this.kms.doSave(km).subscribe(
        (data)=> {
          this.alertService.success("Matrix Saved Successfully")
        },
        (err)=> this.alertService.error(err)
      )
    // KnowledgeMatrixService.knowledgeMatrix.push(km);
    }
   //
    // KnowledgeMatrixService.filledDomianIds.push(this.domainId);

   /* this.knowledgeMatrixVersion = new KnowledgeMatrixVersion()
    this.knowledgeMatrixVersion.domainId = this.domainId
    this.knowledgeMatrixVersion.createdOn = new Date()
    this.knowledgeMatrixVersion.editMode = true
    this.knowledgeMatrixVersion.empid = "b237718864465921"
    this.knowledgeMatrixVersion.versionNo = 1

    this.kmvs.createVersionForDomain(this.knowledgeMatrixVersion)*/



  }
}
