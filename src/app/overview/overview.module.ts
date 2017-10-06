/**
 * Created by lbd7nl1 on 05/10/2017.
 */

import {NgModule} from "@angular/core";
import {OverviewComponent} from "./overview.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "../alert/alert.module";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {ChartModule} from "primeng/components/chart/chart";
@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule,RouterModule,FormsModule,AlertModule,DataTableModule,SharedModule,DropdownModule,ChartModule],
  exports: [OverviewComponent]
})
export class OverviewModule{}
