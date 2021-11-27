import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-facultad-edition',
  templateUrl: './facultad-edition.component.html',
  styleUrls: ['./facultad-edition.component.css']
})
export class FacultadEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService,
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
      codigo: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.name);
        this.GetDF["codigo"].setValue(data.codigo);
      }
    });
  }

  SaveRecord(){
    let model = new FacultadModel();
    model.name = this.GetDF["name"].value;
    model.codigo = this.GetDF["codigo"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: FacultadModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/facultad-list"]);
      }
    });
  }
}