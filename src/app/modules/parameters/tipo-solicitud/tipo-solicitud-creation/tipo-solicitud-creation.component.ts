import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-solicitud-creation',
  templateUrl: './tipo-solicitud-creation.component.html',
  styleUrls: ['./tipo-solicitud-creation.component.css']
})
export class TipoSolicitudCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new TiposolicitudModel();
    model.name = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/tipo-solicitud-list"]);
      }
    })
  }


}
