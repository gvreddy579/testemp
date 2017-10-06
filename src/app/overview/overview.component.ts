/**
 * Created by lbd7nl1 on 05/10/2017.
 */

import {Component} from "@angular/core";
import {KnowledgeMatrix} from "../knowledgematrix/skills/knowledgematrix.model";
import {KnowledgeMatrixService} from "../knowledgematrix/skills/knowledgematrix.service";
import {AlertService} from "../alert/alert.service";
import {SelectItem} from "primeng/components/common/selectitem";
import {isNullOrUndefined} from "util";
@Component({
  templateUrl: "./overview.component.html",
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent{
  data: any;
  knowlegeMatrix:KnowledgeMatrix[]=[]
  levels:SelectItem[]
  constructor(private kowledgeMatrixService:KnowledgeMatrixService, private alertService:AlertService){
  this.levels = [];
    this.levels.push({label: 'Select', value: null})
    this.levels.push({label: '0', value: '0'})
    this.levels.push({label: '1', value: '1'})
    this.levels.push({label: '2', value: '2'})
    this.levels.push({label: '3', value: '3'})
    this.levels.push({label: '4', value: '4'})
    this.kowledgeMatrixService.getKnowlegeMatrix().subscribe(
      (data)=>{this.knowlegeMatrix = data.json()
        this.prepareLevelsDataForChart(this.knowlegeMatrix)},
      (err)=>this.alertService.error(err)
    )




  }

 uploadChart($event){
   let filteredData:KnowledgeMatrix[]=[]
   filteredData = $event.filteredValue
   this.prepareLevelsDataForChart(filteredData)
  console.log(filteredData)

 }

 test($event){
   console.log($event.filteredValue)
 }

 setData(l0,l1,l2,l3,l4){
   this.data = {
     labels: ['L0','L1','L2','L3','L4'],
     datasets: [
       {
         data: [l0,l1, l2, l3,l4],
         backgroundColor: [
           "#e00f1a",
           "#36A2EB",
           "#FFCE56",
           "#FF6384",
           "#125614"
         ],
         hoverBackgroundColor: [
           "#e00f1a",
           "#36A2EB",
           "#FFCE56",
           "#FF6384",
           "#125614"
         ]
       }]
   };
 }

 prepareLevelsDataForChart(knowledgeMatrix:KnowledgeMatrix[]){
   let l1=0,l2=0,l3=0,l4=0,l0=0
   for(let matrix of knowledgeMatrix) {
     if (matrix.level) {
       if (matrix.level == 0) {
         l0++
       }
       if (matrix.level == 1) {
         l1++
       }
       if (matrix.level == 2) {
         l2++
       }
       if (matrix.level == 3) {
         l3++
       }
       if (matrix.level == 4) {
         l4++
       }

     }
     else {
       l0++
   }
   }

   this.setData(l0,l1,l2,l3,l4)
 }


}
