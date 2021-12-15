import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/parameters/evaluacion-solicitud.model';
import { SolicitudJuradoModel } from 'src/app/models/parameters/solicitud-jurado.model';
import { EvaluacionSolicitudService } from 'src/app/services/parameters/evaluacion-solicitud.service';
import { SolicitudJuradoService } from 'src/app/services/parameters/solicitud-jurado.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-evaluacion-solicitud-aceptar',
  templateUrl: './evaluacion-solicitud-aceptar.component.html',
  styleUrls: ['./evaluacion-solicitud-aceptar.component.css']
})
export class EvaluacionSolicitudAceptarCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  relacionList: SolicitudJuradoModel[] = []

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: EvaluacionSolicitudService,    
    private relacionService: SolicitudJuradoService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      cb: [false, Validators.requiredTrue]
    });
    
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new EvaluacionSolicitudModel();
    model.observaciones = this.GetDF["observaciones"].value;
    model.respuesta = true;
    model.fechaRespuesta = new Date().toLocaleDateString();
    //model.notificarJuradoId
    this.service.SaveRecord(model).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }
  GetDataForSelects() {
    
    this.relacionService.GetRecordList().subscribe({
      next: (data: SolicitudJuradoModel[]) => {
        this.relacionList = data;
        setTimeout(() => {
          InitSelect("selRelacion");
        }, 100);
      }
    });
  }

}
