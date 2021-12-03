import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { JuradosCreationComponent } from './jurados/jurados-creation/jurados-creation.component';
import { JuradosEditionComponent } from './jurados/jurados-edition/jurados-edition.component';
import { JuradosListComponent } from './jurados/jurados-list/jurados-list.component';
import { RemoveJuradosComponent } from './jurados/remove-jurados/remove-jurados.component';
import { SolicitudCreationComponent } from './solicitud/solicitud-creation/solicitud-creation.component';
import { SolicitudEditionComponent } from './solicitud/solicitud-edition/solicitud-edition.component';
import { SolicitudListComponent } from './solicitud/solicitud-list/solicitud-list.component';
import { RemoveSolicitudComponent } from './solicitud/remove-solicitud/remove-solicitud.component';
import { ComiteCreationComponent } from './comite/comite-creation/comite-creation.component';
import { ComiteEditionComponent } from './comite/comite-edition/comite-edition.component';
import { ComiteListComponent } from './comite/comite-list/comite-list.component';
import { RemoveComiteComponent } from './comite/remove-comite/remove-comite.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { ComiteSolicitudCreationComponent } from './comite-solicitud/comite-solicitud-creation/comite-solicitud-creation.component';
import { ComiteSolicitudEditionComponent } from './comite-solicitud/comite-solicitud-edition/comite-solicitud-edition.component';
import { ComiteSolicitudListComponent } from './comite-solicitud/comite-solicitud-list/comite-solicitud-list.component';
import { RemoveComiteSolicitudComponent } from './comite-solicitud/remove-comite-solicitud/remove-comite-solicitud.component';
import { EvaluacionSolicitudCreationComponent } from './evaluacion-solicitud/evaluacion-solicitud-creation/evaluacion-solicitud-creation.component';
import { EvaluacionSolicitudEditionComponent } from './evaluacion-solicitud/evaluacion-solicitud-edition/evaluacion-solicitud-edition.component';
import { EvaluacionSolicitudListComponent } from './evaluacion-solicitud/evaluacion-solicitud-list/evaluacion-solicitud-list.component';
import { RemoveEvaluacionSolicitudComponent } from './evaluacion-solicitud/remove-evaluacion-solicitud/remove-evaluacion-solicitud.component';



@NgModule({
  declarations: [
    JuradosCreationComponent,
    JuradosEditionComponent,
    JuradosListComponent,
    RemoveJuradosComponent,
    SolicitudCreationComponent,
    SolicitudEditionComponent,
    SolicitudListComponent,
    RemoveSolicitudComponent,
    ComiteCreationComponent,
    ComiteEditionComponent,
    ComiteListComponent,
    RemoveComiteComponent,
    ModalidadCreationComponent,  
    ModalidadEditionComponent,  
    ModalidadListComponent,  
    ModalidadPhotosComponent, 
    RemoveModalidadComponent, 
    ProponenteCreationComponent,  
    ProponenteEditionComponent,  
    ProponenteListComponent,
    ProponentePhotosComponent,  
    RemoveProponenteComponent,  
    DepartamentoCreationComponent,  
    DepartamentoEditionComponent,  
    DepartamentoListComponent,  
    DepartamentoPhotosComponent,  
    RemoveDepartamentoComponent,  
    FacultadCreationComponent,  
    FacultadEditionComponent,
    FacultadListComponent,    
    FacultadPhotosComponent, 
    RemoveFacultadComponent,
    LineasInvestigacionCreationComponent,
    LineasInvestigacionEditionComponent,
    LineasInvestigacionListComponent,
    RemoveLineasInvestigacionComponent,
    TipoVinculacionCreationComponent,
    TipoVinculacionEditionComponent,
    TipoVinculacionListComponent,
    RemoveTipoVinculacionComponent,
    TipoSolicitudCreationComponent,
    TipoSolicitudEditionComponent,
    TipoSolicitudListComponent,
    RemoveTipoSolicitudComponent,
    ComiteSolicitudCreationComponent,
    ComiteSolicitudEditionComponent,
    ComiteSolicitudListComponent,
    RemoveComiteSolicitudComponent,
    EvaluacionSolicitudCreationComponent,
    EvaluacionSolicitudEditionComponent,
    EvaluacionSolicitudListComponent,
    RemoveEvaluacionSolicitudComponent


  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ParametersModule { }
