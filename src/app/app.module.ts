import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {RouterModule} from "@angular/router";
import {EmployeeModule} from "./employee/employee.module";
import {EmployeeComponent} from "./employee/employee.component";
import {KnowledgeMatrixModule} from "./knowledgematrix/knowledgematrix.module";
import {DomainComponent} from "./knowledgematrix/domain/domain.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoginModule} from "./login/login.module";
import {LoginComponent} from "./login/login.component";
import {LoginGaurd} from "./login/login.gaurd";
import {LogoutComponent} from "./login/logout.component";
import {AlertService} from "./alert/alert.service";
import {AlertModule} from "./alert/alert.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UploadMatrixModule} from "./bulkupload/uploadmatrix.module";
import {UploadMatrixComponent} from "./bulkupload/uploadmatrix.component";
import {OverviewComponent} from "./overview/overview.component";
import {OverviewModule} from "./overview/overview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AlertModule,UploadMatrixModule,BrowserAnimationsModule, HeaderModule,LoginModule, RouterModule, EmployeeModule, KnowledgeMatrixModule, CommonModule, FormsModule, OverviewModule, RouterModule.forRoot([
      {path:"", redirectTo:"login",pathMatch:"full"},
      {path: "home", component: EmployeeComponent,canActivate:[LoginGaurd]},
      {path: "create/:id", component: DomainComponent,canActivate:[LoginGaurd]},
      {path: "manage/:id", component: DomainComponent,canActivate:[LoginGaurd]},
      {path: "upload", component: UploadMatrixComponent,canActivate:[LoginGaurd]},
      {path: "overview", component: OverviewComponent,canActivate:[LoginGaurd]},
      {path: "login",component:LoginComponent},
      {path: "logout",component:LogoutComponent,canActivate:[LoginGaurd]},
      {path: "**", component: LogoutComponent}
    ],{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
