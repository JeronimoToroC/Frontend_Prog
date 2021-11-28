import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-comite-creation',
  templateUrl: './comite-creation.component.html',
  styleUrls: ['./comite-creation.component.css']
})
export class ComiteCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ComiteService
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
    let model = new ComiteModel();
    model.name = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ComiteModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/comite-list"]);
      }
    })
  }


}
