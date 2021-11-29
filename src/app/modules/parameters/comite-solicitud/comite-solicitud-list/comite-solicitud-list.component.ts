import { Component, OnInit } from '@angular/core';
import { ComiteSolicitudModel } from 'src/app/models/parameters/comite-solicitud.model';
import { ComiteSolicitudService } from 'src/app/services/parameters/comite-solicitud.service';

@Component({
  selector: 'app-comite-solicitud-list',
  templateUrl: './comite-solicitud-list.component.html',
  styleUrls: ['./comite-solicitud-list.component.css']
})
export class ComiteSolicitudListComponent implements OnInit {

  recordList: ComiteSolicitudModel[] = [];

  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(
    private service: ComiteSolicitudService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ComiteSolicitudModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      } 
    });
  }

}
