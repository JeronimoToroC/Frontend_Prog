import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-departamento-creation',
  templateUrl: './departamento-creation.component.html',
  styleUrls: ['./departamento-creation.component.css']
})
export class DepartamentoCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private facultadService: FacultadService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      facultadId: [0, [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new DepartamentoModel();
    model.name = this.GetDF["name"].value;
    model.facultadId=this.GetDF["facultadId"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/departamento-list"]);
      }
    })
  }
  
  GetDataForSelects() {
    this.facultadService.GetRecordList().subscribe({
      next: (data: FacultadModel[]) => {
        this.facultadList = data;
        setTimeout(() => {
          InitSelect("selFacultad");
        }, 100);
      }
    });
  }
}
