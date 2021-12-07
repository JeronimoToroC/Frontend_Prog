import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionSolicitudModel } from 'src/app/models/parameters/evaluacion-solicitud.model';
import { EvaluacionSolicitudService } from 'src/app/services/parameters/evaluacion-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-evaluacion-solicitud-rechazar',
  templateUrl: './evaluacion-solicitud-rechazar.component.html',
  styleUrls: ['./evaluacion-solicitud-rechazar.component.css']
})
export class EvaluacionSolicitudRechazarCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: EvaluacionSolicitudService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
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
    model.respuesta = false;
    model.fechaRespuesta = new Date().toLocaleDateString();
    this.service.SaveRecord(model).subscribe({
      next: (data: EvaluacionSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }


}
