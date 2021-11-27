import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurados-creation',
  templateUrl: './jurados-creation.component.html',
  styleUrls: ['./jurados-creation.component.css']
})
export class JuradosCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: JuradosService
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
    let model = new JuradosModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: JuradosModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/jurados-list"]);
      }
    })
  }


}
