import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
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
import { LineasInvestigacionCreationComponent } from './lineas-investigacion/lineas-investigacion-creation/lineas-investigacion-creation.component';
import { LineasInvestigacionEditionComponent } from './lineas-investigacion/lineas-investigacion-edition/lineas-investigacion-edition.component';
import { LineasInvestigacionListComponent } from './lineas-investigacion/lineas-investigacion-list/lineas-investigacion-list.component';
import { RemoveLineasInvestigacionComponent } from './lineas-investigacion/remove-lineas-investigacion/remove-lineas-investigacion.component';
import { TipoVinculacionCreationComponent } from './tipo-vinculacion/tipo-vinculacion-creation/tipo-vinculacion-creation.component';
import { TipoVinculacionEditionComponent } from './tipo-vinculacion/tipo-vinculacion-edition/tipo-vinculacion-edition.component';
import { TipoVinculacionListComponent } from './tipo-vinculacion/tipo-vinculacion-list/tipo-vinculacion-list.component';
import { RemoveTipoVinculacionComponent } from './tipo-vinculacion/remove-tipo-vinculacion/remove-tipo-vinculacion.component';
import { TipoSolicitudCreationComponent } from './tipo-solicitud/tipo-solicitud-creation/tipo-solicitud-creation.component';
import { TipoSolicitudEditionComponent } from './tipo-solicitud/tipo-solicitud-edition/tipo-solicitud-edition.component';
import { TipoSolicitudListComponent } from './tipo-solicitud/tipo-solicitud-list/tipo-solicitud-list.component';
import { RemoveTipoSolicitudComponent } from './tipo-solicitud/remove-tipo-solicitud/remove-tipo-solicitud.component';

const routes: Routes = [
  {
    path:"jurados-creation",
    component: JuradosCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"jurados-edition/:id",
    component: JuradosEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"jurados-list",
    component: JuradosListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-jurados/:id",
    component: RemoveJuradosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"solicitud-creation",
    component: SolicitudCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"solicitud-edition/:id",
    component: SolicitudEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"solicitud-list",
    component: SolicitudListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-solicitud/:id",
    component: RemoveSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"comite-creation",
    component: ComiteCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"comite-edition/:id",
    component: ComiteEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"comite-list",
    component: ComiteListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-comite/:id",
    component: RemoveComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"modalidad-creation",
    component: ModalidadCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"modalidad-edition/:id",
    component: ModalidadEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"modalidad-list",
    component: ModalidadListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-modalidad/:id",
    component: RemoveModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"proponente-creation",
    component: ProponenteCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"proponente-edition/:id",
    component: ProponenteEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"proponente-list",
    component: ProponenteListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-proponente/:id",
    component: RemoveProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"departamento-creation",
    component: DepartamentoCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"departamento-edition/:id",
    component: DepartamentoEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"departamento-list",
    component: DepartamentoListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-departamento/:id",
    component: RemoveDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"facultad-creation",
    component: FacultadCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"facultad-edition/:id",
    component: FacultadEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"facultad-list",
    component: FacultadListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-facultad/:id",
    component: RemoveFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"lineas-investigacion-creation",
    component: LineasInvestigacionCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"lineas-investigacion-edition/:id",
    component: LineasInvestigacionEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"lineas-investigacion-list",
    component: LineasInvestigacionListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-lineas-investigacion/:id",
    component: RemoveLineasInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-vinculacion-creation",
    component: TipoVinculacionCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-vinculacion-edition/:id",
    component: TipoVinculacionEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-vinculacion-list",
    component: TipoVinculacionListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-tipo-vinculacion/:id",
    component: RemoveTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-solicitud-creation",
    component: TipoSolicitudCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-solicitud-edition/:id",
    component: TipoSolicitudEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"tipo-solicitud-list",
    component: TipoSolicitudListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"remove-tipo-solicitud/:id",
    component: RemoveTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"modalidad-photos",
    component: ModalidadPhotosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"proponente-photos",
    component: ProponentePhotosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"departamento-photos",
    component: DepartamentoPhotosComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path:"facultad-photos",
    component:FacultadPhotosComponent,
    canActivate: [AuthenticatedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
