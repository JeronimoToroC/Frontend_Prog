import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente.model';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { UserDataModel } from 'src/app/models/security/user-data.model';
import { ProponenteService } from 'src/app/services/parameters/proponente.service';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';
import { UploadFile } from 'src/app/models/parameters/uploaded.file.model';


declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  uploadedPhoto: boolean = false;
  mainPhotoForm: FormGroup = new FormGroup({});
  uploadedFilename?: string = "";
  dataForm: FormGroup = new FormGroup({});
  check: any = false;
  tipoVinculacionList: TipoVinculacionModel[] = [];
  url_server: string = ConfigurationData.PRINCIPAL_MS_URL;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuariosService,
    private typeVinculationService: TipoVinculacionService,
    private proponenteService: ProponenteService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FormMainPhoto();
    this.GetDataForSelects();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      document: ["", [Validators.required]],
      email: ["", [Validators.required]],
      cell: ["", [Validators.required]],
      foto: ["", [Validators.required]],
      tipoVinculacionId: [0, [Validators.required]],
      foto_principal: ["", [Validators.required]]
    });
  }

  FormMainPhoto() {
    this.mainPhotoForm = this.fb.group({
      file: ["", []]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  checkProp() {
    this.check = !this.check
  }

  isShow() {
    if (this.check === false) {
      return false
    } else {
      return true
    }
  }

  GetDataForSelects() {
    this.typeVinculationService.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[]) => {
        this.tipoVinculacionList = data;
        setTimeout(() => {
          InitSelect("selTipoVinculacion");
        }, 100);
      }
    });
  }

  UploadPhoto(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.mainPhotoForm.controls["file"].setValue(file);
    }
  }

  SubmitFileToServer() {
    const form = new FormData();
    form.append("file", this.mainPhotoForm.controls["file"].value)
    this.service.UploadMainPhoto(form).subscribe({
      next: (data: UploadFile) => {
        this.dataForm.controls["foto_principal"].setValue(data.filename);
        this.uploadedPhoto = true;
        this.uploadedFilename = data.filename
      }
    });
  }

  SaveRecord() {
    if (this.check == true) {
      let modelProponet = new ProponenteModel();
      modelProponet.name = this.GetDF["name"].value;
      modelProponet.lastName = this.GetDF["lastName"].value;
      modelProponet.document = this.GetDF["document"].value;
      modelProponet.email = this.GetDF["email"].value;
      modelProponet.cell = this.GetDF["cell"].value;
      modelProponet.foto = this.GetDF["foto"].value;
      modelProponet.tipoVinculacionId = parseInt(this.GetDF["tipoVinculacionId"].value);
      modelProponet.rolesId = "619194f00b255b2d409dabb0";
      modelProponet.foto_principal = this.GetDF["foto_principal"].value;


      let modelUser = new UserDataModel();
      modelUser.name = this.GetDF["name"].value;
      modelUser.lastName = this.GetDF["lastName"].value;
      modelUser.document = this.GetDF["document"].value;
      modelUser.email = this.GetDF["email"].value;
      modelUser.cell = this.GetDF["cell"].value;
      modelUser.foto = this.GetDF["foto"].value;
      modelUser.rolesId = "619194f00b255b2d409dabb0"

      this.proponenteService.SaveRecord(modelProponet).subscribe({
        next: (data: ProponenteModel) => {
          this.router.navigate(["/security/login"])
          ShowGeneralMessage(ConfigurationData.PASSWORD_MESSAGE)
        }
      })
      this.service.SaveRecord(modelUser).subscribe({
        next: (data: UserDataModel) => {
          this.router.navigate(["/security/login"])
          ShowGeneralMessage(ConfigurationData.PASSWORD_MESSAGE)
        }
      })
    } else {
      let modelUser = new UserDataModel();
      modelUser.name = this.GetDF["name"].value;
      modelUser.lastName = this.GetDF["lastName"].value;
      modelUser.document = this.GetDF["document"].value;
      modelUser.email = this.GetDF["email"].value;
      modelUser.cell = this.GetDF["cell"].value;
      modelUser.foto = this.GetDF["foto"].value;
      modelUser.rolesId = "61a42dc7dfa7253368414034"

      this.service.SaveRecord(modelUser).subscribe({
        next: (data: UserDataModel) => {
          this.router.navigate(["/security/login"])
          ShowGeneralMessage(ConfigurationData.PASSWORD_MESSAGE)
        }
      })
    }
  }
}






