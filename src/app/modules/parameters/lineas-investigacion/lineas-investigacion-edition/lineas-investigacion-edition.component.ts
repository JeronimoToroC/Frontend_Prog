import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { LineasInvestigacionService } from 'src/app/services/parameters/lineas-investigacion.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-lineas-investigacion-edition',
  templateUrl: './lineas-investigacion-edition.component.html',
  styleUrls: ['./lineas-investigacion-edition.component.css']
})
export class LineasInvestigacionEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LineasInvestigacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: LineasInvestigacionModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.name);
      }
    });
  }

  SaveRecord(){
    let model = new LineasInvestigacionModel();
    model.name = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: LineasInvestigacionModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/lineas-investigacion-list"]);
      }
    });
  }
}