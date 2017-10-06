/**
 * Created by lbd7nl1 on 30/09/2017.
 */
import {NgModule} from "@angular/core";
import {DomainComponent} from "./domain/domain.component";
import {RouterModule} from "@angular/router";
import {DomainService} from "./domain/domain.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatrixComponent} from "./skills/matrix.component";
import {SkillService} from "./skills/skills.service";
import {KnowledgeMatrixService} from "./skills/knowledgematrix.service";
import {EmployeeModule} from "../employee/employee.module";
import {ManageMatrixComponent} from "./manage/managematrix.component";
import {KnowledgeMatrixVersionService} from "./skills/knowledgematrixversion.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";
import {TooltipModule} from "primeng/components/tooltip/tooltip";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {ConfirmationService} from "primeng/components/common/confirmationservice";

@NgModule({
  declarations: [DomainComponent,MatrixComponent,ManageMatrixComponent],
  exports: [DomainComponent,MatrixComponent,ManageMatrixComponent],
  imports: [CommonModule, FormsModule, EmployeeModule, BrowserAnimationsModule,OverlayPanelModule,TooltipModule,ConfirmDialogModule, RouterModule.forChild([
    {path:"add/:domainId/:pageId", component:MatrixComponent},
    {path:"modify/:domainId/:pageId", component:ManageMatrixComponent}
  ])],
  providers: [DomainService,SkillService,KnowledgeMatrixService,KnowledgeMatrixVersionService,ConfirmationService]
})
export class KnowledgeMatrixModule{}
