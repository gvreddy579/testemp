/**
 * Created by lbd7nl1 on 04/10/2017.
 */

import {Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {FileUtilService} from "./fileutil.service";
import {AlertService} from "../alert/alert.service";
import {KnowledgeMatrix} from "../knowledgematrix/skills/knowledgematrix.model";
import {KnowledgeMatrixService} from "../knowledgematrix/skills/knowledgematrix.service";
@Component({
  templateUrl: "uploadmatrix.component.html"
})
export class UploadMatrixComponent{

  knowedgeMatrix:KnowledgeMatrix[]=[]
  constructor(private router:Router, private http:Http, private fileUtil:FileUtilService, private alertService:AlertService, private knowledgeMatrixService:KnowledgeMatrixService){}
  showTable:boolean = false
  @ViewChild('fileImportInput')
  fileInput:any

  fileChangeListener($event): void {

    var text = [];
    var files = $event.srcElement.files;

    if (this.fileUtil.isCsvFile(files[0])) {
      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = csvData.split(/\r\n|\n/);

        let headersRow = this.fileUtil
          .getHeaderArray(csvRecordsArray);

        this.knowedgeMatrix = this.fileUtil
          .getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        //this.fileUtil.loadDataToObject(this.csvRecords,headersRow.length)
        this.showTable = true
      }

      if(reader.onerror) {
        this.alertService.error("Cannot able to read" + input.files[0])
        this.knowedgeMatrix=[]
        this.fileInput.nativeElement.value =""
      }

    } else {
     this.alertService.error("Please Upload Valid .CSV file")
      this.fileReset();
    }
  };

  fileReset(){
  this.knowedgeMatrix=[]
    this.fileInput.nativeElement.value =""
    this.showTable = false
}

upload(){
  for (let km of this.knowedgeMatrix) {
     this.knowledgeMatrixService.doSave(km).subscribe(
     (data)=> {
     this.alertService.success("Matrix Saved Successfully")
       this.showTable = false
       this.fileReset()
     },
     (err)=> this.alertService.error(err)
     )

  }
}
}
