import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/parameters/comite-solicitud.model';
import { ComiteSolicitudService } from 'src/app/services/parameters/comite-solicitud.service';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-comite-solicitud-creation',
  templateUrl: './comite-solicitud-creation.component.html',
  styleUrls: ['./comite-solicitud-creation.component.css']
})
export class ComiteSolicitudCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  comiteList: ComiteModel[] = [];
  solicitudList:SolicitudModel[] = [];
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ComiteSolicitudService,
    private comiteService: ComiteService,
    private solicitudService: SolicitudService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      answer: ["", [Validators.required]],
      tipoComiteId: [0, [Validators.required]],
      tipoSolicitudId: [0, [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new ComiteSolicitudModel();
    model.answer = this.GetDF["answer"].value;
    model.tipoComiteId=this.GetDF["tipoComiteId"].value;
    model.tipoSolicitudId=this.GetDF["tipoSolicitudId"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ComiteSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/comite-solicitud-list"]);
      }
    })
  }
  
  GetDataForSelects() {
    this.comiteService.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.comiteList = data;
        setTimeout(() => {
          InitSelect("selComite");
        }, 100);
      }
    });
    this.solicitudService.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudList = data;
        setTimeout(() => {
          InitSelect("selSolicitud");
        }, 100);
      }
    });
  }
}
