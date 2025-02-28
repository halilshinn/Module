import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { BiographyComponent } from './biography/biography.component';
import { ComponiesComponent } from './componies/componies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path: 'tables', component: TablesHomeComponent
    , children: [
      {path: '', component:BiographyComponent, pathMatch: 'full'},
      {path: 'componies', component:ComponiesComponent, pathMatch: 'full'},
      {path: 'partners', component:PartnersComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
