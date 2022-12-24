import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { establishmentRoutingModule } from './establishment-routing.module';
import { establishmentComponent } from './establishment.component';
import { InfosComponent } from './routes/infos/infos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentMenuComponent } from './components/establishment-menu/establishment-menu.component';
import { CalendarComponent } from './routes/calendar/calendar.component';



@NgModule({
  declarations: [
    establishmentComponent,
    InfosComponent,
    EstablishmentMenuComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    establishmentRoutingModule,
    SharedModule
  ]
})
export class establishmentModule { }
