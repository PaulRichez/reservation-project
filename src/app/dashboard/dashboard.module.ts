import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainComponent } from './routes/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './core/components/menu/menu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
