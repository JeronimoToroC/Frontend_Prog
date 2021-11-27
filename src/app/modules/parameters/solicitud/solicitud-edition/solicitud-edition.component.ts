import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-solicitud-edition',
  templateUrl: './solicitud-edition.component.html',
  styleUrls: ['./solicitud-edition.component.css']
})
export class SolicitudEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
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
      descripcion: ["", [Validators.required]],
      tipo_comite: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
        this.GetDF["descripcion"].setValue(data.descripcion);
        this.GetDF["tipoComite"].setValue(data.tipo_comite);
      }
    });
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.nombre = this.GetDF["name"].value;
    model.descripcion = this.GetDF["descripcion"].value;
    model.tipo_comite = this.GetDF["tipoComite"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    });
  }
}