import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-vinculacion-edition',
  templateUrl: './tipo-vinculacion-edition.component.html',
  styleUrls: ['./tipo-vinculacion-edition.component.css']
})
export class TipoVinculacionEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService,
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
      next: (data: TipoVinculacionModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.name);
      }
    });
  }

  SaveRecord(){
    let model = new TipoVinculacionModel();
    model.name = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: TipoVinculacionModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/tipo-vinculacion-list"]);
      }
    });
  }
}