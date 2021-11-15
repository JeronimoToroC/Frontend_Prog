import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SolicitudesApprovedComponent } from './solicitudes/solicitudes-approved/solicitudes-approved.component';
import { SolicitudesCategoryComponent } from './solicitudes/solicitudes-category/solicitudes-category.component';
import { ProponentesYearComponent } from './proponentes/proponentes-year/proponentes-year.component';
import { ProponentesMonthComponent } from './proponentes/proponentes-month/proponentes-month.component';


@NgModule({
  declarations: [
    SolicitudesApprovedComponent,
    SolicitudesCategoryComponent,
    ProponentesYearComponent,
    ProponentesMonthComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
