/**
 * Created by lbd7nl1 on 29/09/2017.
 */


import {Component} from "@angular/core";
import {DomainModel} from "./domain.model";
import {DomainService} from "./domain.service";
import {ActivatedRoute} from "@angular/router";
import {AlertService} from "../../alert/alert.service";
import {Skills} from "../skills/skills.module";
import {SkillService} from "../skills/skills.service";
import {ConfirmationService} from "primeng/components/common/confirmationservice";
@Component({
  templateUrl:"domain.component.html",
  styleUrls:['doamain.component.css']
})
export class DomainComponent{

  domains:DomainModel[] = []
  newDomain:DomainModel = new DomainModel("","","")
  isModify:boolean = false
  isAddModule:boolean = false
  paramId:number =1;
  panelHeading:string = "Choose Domain:"
  constructor(private ds:DomainService, private ar:ActivatedRoute, private as:AlertService, private skillService:SkillService, private confirmationService:ConfirmationService){
    this.paramId = ar.snapshot.params["id"]
    if(this.paramId != 1){
      this.isModify = true
      this.panelHeading= "Manage Domains:"
    }
    this.ds.getDomains().subscribe(
      (data) => this.domains = data.json(),
      (err) => console.log(err)
    )
  }

  addModule(){
    this.isAddModule = true
  }
  cancelAdd(){
    this.isAddModule = false
    this.newDomain = new DomainModel("","","")
  }

  createDomain(){
    this.ds.createDomain(this.newDomain).subscribe(
      (data)=> {
        this.domains.push(data.json())
        this.newDomain = new DomainModel("","","")
        this.as.success("New Domain Created Successfully")
      },
    (err)=>this.as.error(err)


    )
  }

  deleteDomain(selectedDomain:DomainModel,index:number){
    //let confirmDelete = window.confirm("Deleteting a module deletes all its related details(Knowledge Area,Framework..) do you want to continue?")
    let skills:Skills[] = []
    let skillsForDomain:Skills[]=[]
    //if(confirmDelete){
    this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
      accept: () => {
      this.skillService.getSkills().subscribe(
        (data)=>skills = data.json(),
        (err)=>this.as.error(err)
      )
      for(let skill of skills){
        if(skill.domainId==selectedDomain.id){
          this.skillService.deleteSkill(skill.id).subscribe(
            (data)=>{},
            (err)=>this.as.error(err)
          )
        }
      }
      this.ds.deleteDomain(selectedDomain.id).subscribe(
        (data)=>{
          this.domains.splice(index,1)
          this.as.success("Domain Deleted Successfully")
        },
        (err)=>this.as.error(err)
      )
    }
  });



  }
}
