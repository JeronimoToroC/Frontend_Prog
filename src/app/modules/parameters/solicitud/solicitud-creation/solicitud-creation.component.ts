import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { UploadFile } from 'src/app/models/parameters/uploaded.file.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';
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

  uploadedFile: boolean = false;
  dataForm: FormGroup = new FormGroup({});
  lineasInvestlist: LineasInvestigacionModel[] = [];
  modalidadList: ModalidadModel[] = [];
  tipoSolList: TipoSolicitudModel[] = [];  
  tipoComList: ComiteModel[] = [];
  mainFormatForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private lineasInvestService: LineasInvestigacionService,
    private modalidadService: ModalidadService,
    private tipoSolService: TipoSolicitudService,
    private comiteService: ComiteService,    
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
    this.FormMainFormat();
  }

  FormMainFormat() {
    this.mainFormatForm = this.fb.group({
      file: ["", []]
    });
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      workName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      comiteType: [[Validators.required]],
      file: ["", [Validators.required]],
      dateRad: ["", [Validators.required]],
      lineasInvestigacionId: [0, [Validators.required]],
      modalidadId: [0, [Validators.required]],
      tipoSolicitudId: [0, [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
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
    this.comiteService.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.tipoComList = data;
        setTimeout(() => {
          InitSelect("selTipoCom");
        }, 100);
      }
    });
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.workName = this.GetDF["workName"].value;
    model.description = this.GetDF["description"].value;
    model.dateRad = this.GetDF["dateRad"].value;
    model.file = this.GetDF["file"].value;
    model.lineasInvestigacionId=parseInt(this.GetDF["lineasInvestigacionId"].value);
    model.modalidadId=parseInt(this.GetDF["modalidadId"].value);
    model.tipoSolicitudId=parseInt(this.GetDF["tipoSolicitudId"].value);
    const comiteArray = []
    let comite: ComiteModel = {}
    for (let i = 0; i < this.GetDF["comiteType"].value.length; i++) {
      this.tipoComList.find(e => e.id === parseInt(this.GetDF["comiteType"].value[i]) && (
          comite = {
            id: e.id,
            name: e.name
          }
        ))
        comiteArray.push(comite)       
    }
    model.comiteType = comiteArray;
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }
  

  UploadFile(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.mainFormatForm.controls["file"].setValue(file);
    }
  }

  SubmitFileToServer(){
    const form = new FormData();
    form.append("file", this.mainFormatForm.controls["file"].value)
    
    this.service.UploadMainFormat(form).subscribe({
      next: (data: UploadFile) => {
        this.dataForm.controls["file"].setValue(data.filename);
        this.uploadedFile = true;
      }
    });
  }

}
