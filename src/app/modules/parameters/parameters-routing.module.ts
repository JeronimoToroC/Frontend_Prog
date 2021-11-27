import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiteCreationComponent } from './comite/comite-creation/comite-creation.component';
import { ComiteEditionComponent } from './comite/comite-edition/comite-edition.component';
import { ComiteListComponent } from './comite/comite-list/comite-list.component';
import { RemoveComiteComponent } from './comite/remove-comite/remove-comite.component';
import { DepartamentoCreationComponent } from './departamento/departamento-creation/departamento-creation.component';
import { DepartamentoEditionComponent } from './departamento/departamento-edition/departamento-edition.component';
import { DepartamentoListComponent } from './departamento/departamento-list/departamento-list.component';
import { DepartamentoPhotosComponent } from './departamento/departamento-photos/departamento-photos.component';
import { RemoveDepartamentoComponent } from './departamento/remove-departamento/remove-departamento.component';
import { FacultadCreationComponent } from './facultad/facultad-creation/facultad-creation.component';
import { FacultadEditionComponent } from './facultad/facultad-edition/facultad-edition.component';
import { FacultadListComponent } from './facultad/facultad-list/facultad-list.component';
import { FacultadPhotosComponent } from './facultad/facultad-photos/facultad-photos.component';
import { RemoveFacultadComponent } from './facultad/remove-facultad/remove-facultad.component';
import { JuradosCreationComponent } from './jurados/jurados-creation/jurados-creation.component';
import { JuradosEditionComponent } from './jurados/jurados-edition/jurados-edition.component';
import { JuradosListComponent } from './jurados/jurados-list/jurados-list.component';
import { RemoveJuradosComponent } from './jurados/remove-jurados/remove-jurados.component';
import { ModalidadCreationComponent } from './modalidad/modalidad-creation/modalidad-creation.component';
import { ModalidadEditionComponent } from './modalidad/modalidad-edition/modalidad-edition.component';
import { ModalidadListComponent } from './modalidad/modalidad-list/modalidad-list.component';
import { ModalidadPhotosComponent } from './modalidad/modalidad-photos/modalidad-photos.component';
import { RemoveModalidadComponent } from './modalidad/remove-modalidad/remove-modalidad.component';
import { ProponenteCreationComponent } from './proponente/proponente-creation/proponente-creation.component';
import { ProponenteEditionComponent } from './proponente/proponente-edition/proponente-edition.component';
import { ProponenteListComponent } from './proponente/proponente-list/proponente-list.component';
import { ProponentePhotosComponent } from './proponente/proponente-photos/proponente-photos.component';
import { RemoveProponenteComponent } from './proponente/remove-proponente/remove-proponente.component';
import { RemoveSolicitudComponent } from './solicitud/remove-solicitud/remove-solicitud.component';
import { SolicitudCreationComponent } from './solicitud/solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './solicitud/solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './solicitud/solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path:"jurados-creation",
    component: JuradosCreationComponent
  },
  {
    path:"jurados-edition/:id",
    component: JuradosEditionComponent
  },
  {
    path:"jurados-list",
    component: JuradosListComponent
  },
  {
    path:"remove-jurados/:id",
    component: RemoveJuradosComponent
  },
  {
    path:"solicitud-creation",
    component: SolicitudCreationComponent
  },
  {
    path:"solicitud-edition/:id",
    component: SolicitudEditionComponent
  },
  {
    path:"solicitud-list",
    component: SolicitudListComponent
  },
  {
    path:"remove-solicitud/:id",
    component: RemoveSolicitudComponent
  },
  {
    path:"comite-creation",
    component: ComiteCreationComponent
  },
  {
    path:"comite-edition/:id",
    component: ComiteEditionComponent
  },
  {
    path:"comite-list",
    component: ComiteListComponent
  },
  {
    path:"remove-comite/:id",
    component: RemoveComiteComponent
  },
  {
    path:"modalidad-creation",
    component: ModalidadCreationComponent
  },
  {
    path:"modalidad-edition/:id",
    component: ModalidadEditionComponent
  },
  {
    path:"modalidad-list",
    component: ModalidadListComponent
  },
  {
    path:"remove-modalidad/:id",
    component: RemoveModalidadComponent
  },
  {
    path:"proponente-creation",
    component: ProponenteCreationComponent
  },
  {
    path:"proponente-edition/:id",
    component: ProponenteEditionComponent
  },
  {
    path:"proponente-list",
    component: ProponenteListComponent
  },
  {
    path:"remove-proponente/:id",
    component: RemoveProponenteComponent
  },
  {
    path:"departamento-creation",
    component: DepartamentoCreationComponent
  },
  {
    path:"departamento-edition/:id",
    component: DepartamentoEditionComponent
  },
  {
    path:"departamento-list",
    component: DepartamentoListComponent
  },
  {
    path:"remove-departamento/:id",
    component: RemoveDepartamentoComponent
  },
  {
    path:"facultad-creation",
    component: FacultadCreationComponent
  },
  {
    path:"facultad-edition/:id",
    component: FacultadEditionComponent
  },
  {
    path:"facultad-list",
    component: FacultadListComponent
  },
  {
    path:"remove-facultad/:id",
    component: RemoveFacultadComponent
  },
  {
    path:"modalidad-photos",
    component: ModalidadPhotosComponent
  },
  {
    path:"proponente-photos",
    component: ProponentePhotosComponent
  },
  {
    path:"departamento-photos",
    component: DepartamentoPhotosComponent
  },
  {
    path:"facultad-photos",
    component:FacultadPhotosComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
