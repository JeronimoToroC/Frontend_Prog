import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { ValidacionCreationComponent } from './validacion/validacion-creation/validacion-creation.component';
import { ValidacionEditionComponent } from './validacion/validacion-edition/validacion-edition.component';
import { ValidacionListComponent } from './validacion/validacion-list/validacion-list.component';
import { RemoveValidacionComponent } from './validacion/remove-validacion/remove-validacion.component';
import { FacturaConsultComponent } from './factura/factura-consult/factura-consult.component';
import { FacturaEditionComponent } from './factura/factura-edition/factura-edition.component';
import { FacturaPrintComponent } from './factura/factura-print/factura-print.component';


@NgModule({
  declarations: [
    ValidacionCreationComponent,
    ValidacionEditionComponent,
    ValidacionListComponent,
    RemoveValidacionComponent,
    FacturaConsultComponent,
    FacturaEditionComponent,
    FacturaPrintComponent
  ],
  imports: [
    CommonModule,
    ValidationRoutingModule
  ]
})
export class ValidationModule { }
