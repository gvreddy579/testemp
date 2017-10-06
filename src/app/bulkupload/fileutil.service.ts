import {Injectable} from "@angular/core";
import {KnowledgeMatrix} from "../knowledgematrix/skills/knowledgematrix.model";
/**
 * Created by lbd7nl1 on 04/10/2017.
 */
@Injectable()
export class FileUtilService{
  knowledgeMatrix:KnowledgeMatrix

  getHeaderArray(csvRecordsArr) {
    let headers = csvRecordsArr[0].split(';');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength) {
    var dataArr = []
    let knowledgeMatrixOfEmp:KnowledgeMatrix[]=[]
    for (let i = 1; i < csvRecordsArray.length-2; i++) {
      let data = csvRecordsArray[i].split(';');

      if (data.length == headerLength) {
        //let col = [];

        for (let j = 0; j < data.length; j++) {
          //col.push(data[j]);
          knowledgeMatrixOfEmp.push(this.setDataToKnowLedgeMatrix(data[j],headerLength))
          // let rowData = data[j].split(',');
          // for(let k = 0; k<rowData.length;k++){
          //
          // }
        }

        //dataArr.push(col);
      }else{
        return knowledgeMatrixOfEmp;
      }
    }
    return knowledgeMatrixOfEmp;
  }

  setDataToKnowLedgeMatrix(data,headerlength){
    let rowData = data.split(',')
    let knowledgeMatrix:KnowledgeMatrix = new KnowledgeMatrix()
    let i = 0
    console.log(rowData.length)
    console.log(headerlength)

   // if(rowData.length == headerlength) {
      knowledgeMatrix.empid = rowData[i++]
      knowledgeMatrix.name = rowData[i++]
      knowledgeMatrix.teamManager = rowData[i++]
      knowledgeMatrix.hod = rowData[i++]
      knowledgeMatrix.team = rowData[i++]
      knowledgeMatrix.framework = rowData[i++]
      knowledgeMatrix.domain = rowData[i++]
      knowledgeMatrix.knowledgeArea = rowData[i++]
      knowledgeMatrix.level = rowData[i++]
      knowledgeMatrix.relevantExp = rowData[i++]
      knowledgeMatrix.externalExp = rowData[i++]
      knowledgeMatrix.currentProgram = rowData[i++]

   // }
    return knowledgeMatrix
  }

  /*loadDataToObject(csvRecordsArray, headerLength){
    for (let i = 0; i < csvRecordsArray.length; i++) {
      let data = csvRecordsArray[i].split(',');

      if (data.length == headerLength) {
        let col = [];
        for (let j = 0; j < data.length; j++) {
          console.log(data[j]);
        }
      }
    }
  }*/

  isCsvFile(file:File){
    if(file.name.includes(".csv")){
      return true
    }

    return false
  }
}
