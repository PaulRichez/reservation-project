import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { establishmentRoutingModule } from './establishment-routing.module';
import { establishmentComponent } from './establishment.component';
import { InfosComponent } from './routes/infos/infos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstablishmentMenuComponent } from './components/establishment-menu/establishment-menu.component';
import { ReservationsComponent } from './routes/reservations/reservations.component';



@NgModule({
  declarations: [
    establishmentComponent,
    InfosComponent,
    EstablishmentMenuComponent,
    ReservationsComponent,
  ],
  imports: [
    CommonModule,
    establishmentRoutingModule,
    SharedModule
  ]
})
export class establishmentModule { }
