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
      workName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      comiteType: ["", [Validators.required]],
      file: ["", [Validators.required]],
      dateRad: ["", [Validators.required]],
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
        this.GetDF["workName"].setValue(data.workName);
        this.GetDF["description"].setValue(data.description);
        this.GetDF["comiteType"].setValue(data.comiteType);
        this.GetDF["file"].setValue(data.file);
        this.GetDF["dateRad"].setValue(data.dateRad);
      
      }
    });
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.workName = this.GetDF["workName"].value;
    model.description = this.GetDF["description"].value;
    model.comiteType = this.GetDF["comiteType"].value;
    model.file = this.GetDF["file"].value;
    model.dateRad = this.GetDF["dateRad"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    });
  }
}