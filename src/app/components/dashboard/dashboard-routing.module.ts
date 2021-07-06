import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {BachecaComponent} from "./bacheca/bacheca.component";
import {PrestitiComponent} from "./prestiti/prestiti.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', component: BachecaComponent},
      {path: 'prestiti', component: PrestitiComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
