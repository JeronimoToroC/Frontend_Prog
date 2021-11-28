import { Component, OnInit } from '@angular/core';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';

@Component({
  selector: 'app-tipo-vinculacion-list',
  templateUrl: './tipo-vinculacion-list.component.html',
  styleUrls: ['./tipo-vinculacion-list.component.css']
})
export class TipoVinculacionListComponent implements OnInit {

  recordList: TipoVinculacionModel[] = [];

  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(
    private service: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      } 
    });
  }

}
