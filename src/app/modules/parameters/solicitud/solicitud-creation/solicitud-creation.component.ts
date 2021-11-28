import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-solicitud-creation',
  templateUrl: './solicitud-creation.component.html',
  styleUrls: ['./solicitud-creation.component.css']
})
export class SolicitudCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      workName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      comiteType: ["", [Validators.required]],
      file: ["", [Validators.required]],
      date_rad: ["", [Validators.required]],
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
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }


}
