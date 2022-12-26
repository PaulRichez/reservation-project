import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { StateComponent } from './components/state/state.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
const PrimesModules = [
  CardModule,
  InputTextModule,
  ButtonModule,
  DividerModule,
  AvatarModule,
  TableModule,
  SelectButtonModule,
  DropdownModule
]

@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimesModules,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PrimesModules,
    StateComponent,
    FormsModule
  ]
})
export class SharedModule { }
