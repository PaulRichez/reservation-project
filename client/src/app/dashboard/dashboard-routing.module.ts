import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './routes/main/main.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: MainComponent },
      { path: 'etablishment', loadChildren: () => import('./routes/etablishment/etablishment.module').then(m => m.EtablishmentModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
