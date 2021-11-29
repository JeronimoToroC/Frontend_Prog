import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-departamento-edition',
  templateUrl: './departamento-edition.component.html',
  styleUrls: ['./departamento-edition.component.css']
})
export class DepartamentoEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  facultadList: FacultadModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute,
    private facultadService: FacultadService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
    this.GetDataForSelects();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      facultadId: [0, [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.name);
      }
    });
  }

  SaveRecord(){
    let model = new DepartamentoModel();
    model.name = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;    
    model.facultadId=this.GetDF["facultadId"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/departamento-list"]);
      }
    });
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