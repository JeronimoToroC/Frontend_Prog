import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveValidacionComponent } from './validacion/remove-validacion/remove-validacion.component';
import { ValidacionCreationComponent } from './validacion/validacion-creation/validacion-creation.component';
import { ValidacionEditionComponent } from './validacion/validacion-edition/validacion-edition.component';
import { ValidacionListComponent } from './validacion/validacion-list/validacion-list.component';

const routes: Routes = [
  {
    path:"validacion-creation",
    component: ValidacionCreationComponent 
  },
  {
    path:"validacion-edition",
    component: ValidacionEditionComponent
  },
  {
    path:"validacion-list",
    component: ValidacionListComponent
  },
  {
    path:"remove-validacion",
    component: RemoveValidacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }
