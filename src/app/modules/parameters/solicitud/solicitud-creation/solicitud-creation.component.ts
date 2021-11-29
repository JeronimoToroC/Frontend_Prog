import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { LineasInvestigacionService } from 'src/app/services/parameters/lineas-investigacion.service';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-solicitud-creation',
  templateUrl: './solicitud-creation.component.html',
  styleUrls: ['./solicitud-creation.component.css']
})
export class SolicitudCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  lineasInvestlist: LineasInvestigacionModel[] = [];
  modalidadList: ModalidadModel[] = [];
  tipoSolList: TipoSolicitudModel[] = [];

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private lineasInvestService: LineasInvestigacionService,
    private modalidadService: ModalidadService,
    private tipoSolService: TipoSolicitudService,    
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      workName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      comiteType: ["", [Validators.required]],
      file: ["", [Validators.required]],
      date_rad: ["", [Validators.required]],
      lineasInvestigacionId: [0, [Validators.required]],
      modalidadId: [0, [Validators.required]],
      tipoSolicitudId: [0, [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.workName = this.GetDF["workName"].value;
    model.description = this.GetDF["description"].value;
    model.comiteType = this.GetDF["comiteType"].value;
    model.date_rad = this.GetDF["date_rad"].value;
    model.file = this.GetDF["file"].value;
    model.lineasInvestigacionId=this.GetDF["lineasInvestigacionId"].value;
    model.modalidadId=this.GetDF["modalidadId"].value;
    model.tipoSolicitudId=this.GetDF["tipoSolicitudId"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }
  GetDataForSelects() {
    this.lineasInvestService.GetRecordList().subscribe({
      next: (data: LineasInvestigacionModel[]) => {
        this.lineasInvestlist = data;
        setTimeout(() => {
          InitSelect("selLineas");
        }, 100);
      }
    });
    this.modalidadService.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.modalidadList = data;
        setTimeout(() => {
          InitSelect("selModalidad");
        }, 100);
      }
    });
    this.tipoSolService.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) => {
        this.tipoSolList = data;
        setTimeout(() => {
          InitSelect("selTipoSol");
        }, 100);
      }
    });
  }

}
