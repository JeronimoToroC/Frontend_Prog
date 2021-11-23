import { Component, OnInit } from '@angular/core';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

@Component({
  selector: 'app-modalidad-list',
  templateUrl: './modalidad-list.component.html',
  styleUrls: ['./modalidad-list.component.css']
})
export class ModalidadListComponent implements OnInit {

  recordList: ModalidadModel[] = [];

  constructor(
    private service: ModalidadService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.recordList = data;
      } 
    });
  }

}
