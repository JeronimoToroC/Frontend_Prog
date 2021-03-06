import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/parameters/evaluacion-solicitud.model';
import { EvaluacionSolicitudService } from 'src/app/services/parameters/evaluacion-solicitud.service';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-evaluacion-solicitud-creation',
  templateUrl: './evaluacion-solicitud-creation.component.html',
  styleUrls: ['./evaluacion-solicitud-creation.component.css']
})
export class EvaluacionSolicitudCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  solicitudList: SolicitudModel[] = [];
  juradosList: JuradosModel[] = [];
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: EvaluacionSolicitudService,
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
    let model = new EvaluacionSolicitudModel();
    model.respuesta = false;
    this.service.SaveRecord(model).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/EvaluacionSolicitud-list"]);
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
}
