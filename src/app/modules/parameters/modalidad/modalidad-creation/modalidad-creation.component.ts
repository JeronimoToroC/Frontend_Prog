import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-modalidad-creation',
  templateUrl: './modalidad-creation.component.html',
  styleUrls: ['./modalidad-creation.component.css']
})
export class ModalidadCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ModalidadService
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
    let model = new ModalidadModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ModalidadModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/modalidad-list"]);
      }
    })
  }


}
