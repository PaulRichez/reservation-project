import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { establishmentRoutingModule } from './establishment-routing.module';
import { establishmentComponent } from './establishment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentMenuComponent } from './components/establishment-menu/establishment-menu.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';
import { StatsComponent } from './routes/stats/stats.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { CalendarComponent } from './routes/reservations/components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChartModule } from 'primeng/chart';
import { StatsCardComponent } from './routes/stats/components/stats-card/stats-card.component';



@NgModule({
  declarations: [
    establishmentComponent,
    EstablishmentMenuComponent,
    ReservationsComponent,
    StatsComponent,
    SettingsComponent,
    CalendarComponent,
    StatsCardComponent,
  ],
  imports: [
    CommonModule,
    establishmentRoutingModule,
    SharedModule,
    FullCalendarModule,
    ChartModule
  ]
})
export class establishmentModule { }
