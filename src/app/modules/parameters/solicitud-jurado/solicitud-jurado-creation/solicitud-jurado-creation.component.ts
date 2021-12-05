import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudJuradoModel } from 'src/app/models/parameters/solicitud-jurado.model';
import { SolicitudJuradoService } from 'src/app/services/parameters/solicitud-jurado.service';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;


@Component({
  selector: 'app-SolicitudJurado-creation',
  templateUrl: './solicitud-jurado-creation.component.html',
  styleUrls: ['./solicitud-jurado-creation.component.css']
})
export class SolicitudJuradoCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  solicitudList: SolicitudModel[] = [];
  juradosList: JuradosModel[] = [];

  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: SolicitudJuradoService,
    private solicitudService: SolicitudService,
    private juradosService: JuradosService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      solicitudId: [[Validators.required]],
      juradosId: [[Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new SolicitudJuradoModel();
    model.juradosId =(this.GetDF["juradosId"].value);
    model.solicitudId=(this.GetDF["solicitudId"].value);
    model.fechaInvitacion = new Date().toLocaleDateString();
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudJuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }
  
  GetDataForSelects() {
    this.solicitudService.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudList = data;
        setTimeout(() => {
          InitSelect("selSolicitud");
        }, 100);
      }
    });
    this.juradosService.GetRecordList().subscribe({
      next: (data: JuradosModel[]) => {
        this.juradosList = data;
        setTimeout(() => {
          InitSelect("selJurados");
        }, 100);
      }
    });
  }

  MensajeInvitation(){
    let model = new SolicitudJuradoModel();
    model.juradosId =(this.GetDF["juradosId"].value);
    model.linkaceptar = "http://localhost:4200/parameters/";
    model.linkrechazar = "http://localhost:4200/parameters/";
    this.service.MensajeInvitación(model).subscribe({
      next: (data: SolicitudJuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/home"]);
      }
    })
  }
}
