import { Component, OnInit } from '@angular/core';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

@Component({
  selector: 'app-tipo-solicitud-list',
  templateUrl: './tipo-solicitud-list.component.html',
  styleUrls: ['./tipo-solicitud-list.component.css']
})
export class TipoSolicitudListComponent implements OnInit {

  recordList: TipoSolicitudModel[] = [];

  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      } 
    });
  }

}
