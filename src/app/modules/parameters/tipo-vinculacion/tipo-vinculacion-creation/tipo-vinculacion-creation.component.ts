import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-vinculacion-creation',
  templateUrl: './tipo-vinculacion-creation.component.html',
  styleUrls: ['./tipo-vinculacion-creation.component.css']
})
export class TipoVinculacionCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: TipoVinculacionService
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
    let model = new TipoVinculacionModel();
    model.name = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoVinculacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/tipo-vinculacion-list"]);
      }
    })
  }


}
