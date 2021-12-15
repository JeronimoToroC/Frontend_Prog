import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { QuejaJuradosModel } from 'src/app/models/parameters/queja-jurados.model';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';
import { QuejaJuradosService } from 'src/app/services/parameters/queja-jurados.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;

@Component({
  selector: 'app-queja-jurados-creation',
  templateUrl: './queja-jurados-creation.component.html',
  styleUrls: ['./queja-jurados-creation.component.css']
})
export class QuejaJuradosCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  juradosList: JuradosModel[] = [];
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: QuejaJuradosService,
    private juradosService: JuradosService,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.GetDataForSelects();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      resumen: ["", [Validators.required]],
      juradosId: [[Validators.required]],
    });
  }

  get GetDF (){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new QuejaJuradosModel();
    model.resumen = this.GetDF["resumen"].value;
    model.juradoId=parseInt(this.GetDF["juradosId"].value)
    this.service.SaveRecord(model).subscribe({
      next: (data: QuejaJuradosModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/jurados-list"]);
      }
    })
  }
  
  GetDataForSelects() {
    this.juradosService.GetRecordList().subscribe({
      next: (data: JuradosModel[]) => {
        this.juradosList = data;
        setTimeout(() => {
          InitSelect("selJurados");
        }, 100);
      }
    });
  }
}
