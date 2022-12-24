import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { establishmentComponent } from './establishment.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { StatsComponent } from './routes/stats/stats.component';

const routes: Routes = [
  {
    path: ':id', component: establishmentComponent, children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class establishmentRoutingModule { }
