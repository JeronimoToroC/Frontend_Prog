import { Component, OnInit } from '@angular/core';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { LineasInvestigacionService } from 'src/app/services/parameters/lineas-investigacion.service';

@Component({
  selector: 'app-lineas-investigacion-list',
  templateUrl: './lineas-investigacion-list.component.html',
  styleUrls: ['./lineas-investigacion-list.component.css']
})
export class LineasInvestigacionListComponent implements OnInit {

  recordList: LineasInvestigacionModel[] = [];

  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(
    private service: LineasInvestigacionService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: LineasInvestigacionModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      } 
    });
  }

}
