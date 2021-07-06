import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { DashboardComponent } from './dashboard.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { PrestitiComponent } from './prestiti/prestiti.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BachecaComponent,
    PrestitiComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
