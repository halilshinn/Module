import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', loadChildren: ()=>
    import('./placeholders/placeholders.module').then(m =>m.PlaceholdersModule)
  },
  {path:'', loadChildren:()=>
    import('./tables/tables.module').then(m=>m.TablesModule)
  },
  
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
