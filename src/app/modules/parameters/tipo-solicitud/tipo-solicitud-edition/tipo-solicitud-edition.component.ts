import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-solicitud-edition',
  templateUrl: './tipo-solicitud-edition.component.html',
  styleUrls: ['./tipo-solicitud-edition.component.css']
})
export class TipoSolicitudEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService,
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
      format: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.name);        
        this.GetDF["format"].setValue(data.format);
      }
    });
  }

  SaveRecord(){
    let model = new TipoSolicitudModel();
    model.name = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;    
    model.format = this.GetDF["format"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: TipoSolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/tipo-solicitud-list"]);
      }
    });
  }
}