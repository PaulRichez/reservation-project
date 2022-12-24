import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { establishmentComponent } from './establishment.component';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { InfosComponent } from './routes/infos/infos.component';

const routes: Routes = [
  {
    path: ':id', component: establishmentComponent, children: [
      { path: '', redirectTo: 'calendar', pathMatch: 'full' },
      { path: 'infos', component: InfosComponent },
      { path: 'calendar', component: CalendarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class establishmentRoutingModule { }
