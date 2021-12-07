import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-comite-solicitud-edition',
  templateUrl: './comite-solicitud-edition.component.html',
  styleUrls: ['./comite-solicitud-edition.component.css']
})
export class ComiteSolicitudEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  comiteList: ComiteModel[] = [];
  solicitudList: SolicitudModel[] = [];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ComiteSolicitudService,
    private route: ActivatedRoute,
    private comiteService: ComiteService,
    private solicitudService: SolicitudService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
    this.GetDataForSelects();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      answer: ["", [Validators.required]],
      tipoComiteId: [0, [Validators.required]],
      tipoSolicitudId: [0, [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ComiteSolicitudModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["answer"].setValue(data.answer);
      }
    });
  }

  SaveRecord(){
    let model = new ComiteSolicitudModel();
    model.answer = this.GetDF["answer"].value;
    model.id = this.GetDF["id"].value;    
    model.tipoComiteId=this.GetDF["tipoComiteId"].value;
    model.tipoSolicitudId=this.GetDF["tipoSolicitudId"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: ComiteSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/comite-solicitud-list"]);
      }
    });
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