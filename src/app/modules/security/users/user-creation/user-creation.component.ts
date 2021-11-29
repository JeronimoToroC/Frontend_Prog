import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserDataModel } from 'src/app/models/security/user-data.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  check: any = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      document: ["", [Validators.required]],
      email: ["", [Validators.required]],
      cell: ["", [Validators.required]],
      foto: ["", [Validators.required]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  checkProp() {
    this.check = !this.check
  }

  SaveRecord() {
    let model = new UserDataModel();
    model.name = this.GetDF["name"].value;
    model.lastName = this.GetDF["lastName"].value;
    model.document = this.GetDF["document"].value;
    model.email = this.GetDF["email"].value;
    model.cell = this.GetDF["cell"].value;
    model.foto = this.GetDF["foto"].value;
    if (this.check == true) {
      model.rolesId = "619194f00b255b2d409dabb0"
    } else {
      model.rolesId = "61a42dc7dfa7253368414034"
    }
    this.service.SaveRecord(model).subscribe({
      next: (data: UserDataModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    })
  }
}






