import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT)]],
      password: ["",[Validators.required, Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT)]]
    });
  }

  Login(){
    if(this.dataForm.invalid){
      ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
    }else{
      ShowGeneralMessage(ConfigurationData.VALID_FORM_MESSAGE);
    }
  }

  get GetDF (){
    return this.dataForm.controls;
  }

}
