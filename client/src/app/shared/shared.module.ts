import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
const PrimesModules = [
  CardModule,
  InputTextModule,
  ButtonModule,
  DividerModule,
  AvatarModule,
  TableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimesModules
  ],
  exports: [
    PrimesModules
  ]
})
export class SharedModule { }
