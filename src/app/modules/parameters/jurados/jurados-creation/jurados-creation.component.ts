import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';
import { UserDataModel } from 'src/app/models/security/user-data.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';
import { EntidadService } from 'src/app/services/parameters/entidad.service';
import { EntidadModel } from 'src/app/models/parameters/entidad.model'

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-jurados-creation',
  templateUrl: './jurados-creation.component.html',
  styleUrls: ['./jurados-creation.component.css']
})
export class JuradosCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  entidadList: EntidadModel[] = [];


  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: JuradosService,
    private userService: UsuariosService,
    private entidadService: EntidadService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  GetDataForSelects() {
    this.entidadService.GetRecordList().subscribe({
      next: (data: EntidadModel[]) => {
        this.entidadList = data;
        setTimeout(() => {
          InitSelect("entidadSelect");
        }, 100);
      }
    });
  }


  FormBuilding(){
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      document: ["", [Validators.required]],
      email: ["", [Validators.required]],
      cell: ["", [Validators.required]],
      foto: ["", [Validators.required]],
      entidadId: [0, [Validators.required]]
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }
  SaveRecord() {
      let modelJurado = new JuradosModel();
      modelJurado.name = this.GetDF["name"].value;
      modelJurado.lastName = this.GetDF["lastName"].value;
      modelJurado.document = this.GetDF["document"].value;
      modelJurado.email = this.GetDF["email"].value;
      modelJurado.cell = this.GetDF["cell"].value;
      modelJurado.foto = this.GetDF["foto"].value;
      modelJurado.rolesId = "619194fe0b255b2d409dabb2";
      modelJurado.entidadId = parseInt(this.GetDF["entidadId"].value);

      let modelUser = new UserDataModel();
      modelUser.name = this.GetDF["name"].value;
      modelUser.lastName = this.GetDF["lastName"].value;
      modelUser.document = this.GetDF["document"].value;
      modelUser.email = this.GetDF["email"].value;
      modelUser.cell = this.GetDF["cell"].value;
      modelUser.foto = this.GetDF["foto"].value;
      modelUser.rolesId = "619194fe0b255b2d409dabb2"

      console.log("Jeronimo modelJurado", modelJurado)

      this.service.SaveRecord(modelJurado).subscribe({
        next: (data: JuradosModel) => {
          ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
          this.router.navigate(["/parameters/jurados-list"]);
        }
      })
      this.userService.SaveRecord(modelUser).subscribe({
        next: (data: UserDataModel) => {
          this.router.navigate(["/security/login"])
          ShowGeneralMessage(ConfigurationData.PASSWORD_MESSAGE)
        }
      })
  }
}







