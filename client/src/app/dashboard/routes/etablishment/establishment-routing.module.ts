import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { establishmentComponent } from './establishment.component';
import { InfosComponent } from './routes/infos/infos.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';

const routes: Routes = [
  {
    path: ':id', component: establishmentComponent, children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'infos', component: InfosComponent },
      { path: 'reservations', component: ReservationsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class establishmentRoutingModule { }
