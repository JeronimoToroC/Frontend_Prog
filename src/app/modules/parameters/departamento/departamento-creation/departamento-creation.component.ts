import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-departamento-creation',
  templateUrl: './departamento-creation.component.html',
  styleUrls: ['./departamento-creation.component.css']
})
export class DepartamentoCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: DepartamentoService
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
    let model = new DepartamentoModel();
    model.name = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/departamento-list"]);
      }
    })
  }


}
