import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablishmentComponent } from './etablishment.component';
import { InfosComponent } from './routes/infos/infos.component';

const routes: Routes = [
  {
    path: ':id', component: EtablishmentComponent, children: [
      { path: '', redirectTo: 'infos', pathMatch: 'full' },
      { path: 'infos', component: InfosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablishmentRoutingModule { }
