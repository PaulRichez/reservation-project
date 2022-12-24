import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './routes/main/main.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: MainComponent },
      { path: 'establishment', loadChildren: () => import('./routes/etablishment/establishment.module').then(m => m.establishmentModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
