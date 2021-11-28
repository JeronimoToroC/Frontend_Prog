import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResetPasswordModel } from 'src/app/models/security/reset-password.model';
import { ResetPasswordService } from 'src/app/services/shared/reset-password.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ResetPasswordService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      email: ["", [Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  ResetPassword(){
    let model = new ResetPasswordModel();
    model.email = this.GetDF["email"].value;
    this.service.ResetPassword(model).subscribe({
      next: (data: ResetPasswordModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/home"]);
      }
    })
  }


}
