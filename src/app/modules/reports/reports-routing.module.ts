import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProponentesMonthComponent } from './proponentes/proponentes-month/proponentes-month.component';
import { ProponentesYearComponent } from './proponentes/proponentes-year/proponentes-year.component';
import { SolicitudesApprovedComponent } from './solicitudes/solicitudes-approved/solicitudes-approved.component';
import { SolicitudesCategoryComponent } from './solicitudes/solicitudes-category/solicitudes-category.component';

const routes: Routes = [
  {
    path:"solicitudes-approved",
    component: SolicitudesApprovedComponent
  },
  {
    path:"solicitudes-category",
    component: SolicitudesCategoryComponent
  },
  {
    path:"proponentes-year",
    component: ProponentesYearComponent
  },
  {
    path:"proponentes-month",
    component: ProponentesMonthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
