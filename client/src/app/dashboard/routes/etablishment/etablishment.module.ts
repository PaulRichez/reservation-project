import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtablishmentRoutingModule } from './etablishment-routing.module';
import { EtablishmentComponent } from './etablishment.component';
import { InfosComponent } from './routes/infos/infos.component';


@NgModule({
  declarations: [
    EtablishmentComponent,
    InfosComponent
  ],
  imports: [
    CommonModule,
    EtablishmentRoutingModule
  ]
})
export class EtablishmentModule { }
