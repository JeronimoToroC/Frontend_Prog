import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';
import { RecordarJuradoModel } from 'src/app/models/parameters/recordar-jurado.model';
import { RecordarJuradoService } from 'src/app/services/parameters/recordar-jurado.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-recordar-jurado-creation',
  templateUrl: './recordar-jurado-creation.component.html',
  styleUrls: ['./recordar-jurado-creation.component.css']
})
export class RecordarJuradoCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  juradosList:JuradosModel[] = [];

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: RecordarJuradoService,
    private juradoService: JuradosService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      juradosId: [[Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new RecordarJuradoModel();
    model.juradosId = parseInt(this.GetDF["juradosId"].value);
    this.service.SaveRecord(model).subscribe({
      next: (data: RecordarJuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/jurados-list"]);
      }
    })
  }
  
  GetDataForSelects() {
    this.juradoService.GetRecordList().subscribe({
      next: (data: JuradosModel[]) => {
        this.juradosList = data;
        setTimeout(() => {
          InitSelect("selJurados");
        }, 100);
      }
    });
  }
}
