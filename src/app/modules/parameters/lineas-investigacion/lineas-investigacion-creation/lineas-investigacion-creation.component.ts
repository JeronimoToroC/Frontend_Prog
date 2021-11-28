import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { LineasInvestigacionService } from 'src/app/services/parameters/lineas-investigacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-lineas-investigacion-creation',
  templateUrl: './lineas-investigacion-creation.component.html',
  styleUrls: ['./lineas-investigacion-creation.component.css']
})
export class LineasInvestigacionCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: LineasInvestigacionService
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
    let model = new LineasInvestigacionModel();
    model.name = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: LineasInvestigacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/lineas-investigacion-list"]);
      }
    })
  }


}
