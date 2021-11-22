import { Component, OnInit } from '@angular/core';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { JuradosService } from 'src/app/services/parameters/jurados.service';

@Component({
  selector: 'app-jurados-list',
  templateUrl: './jurados-list.component.html',
  styleUrls: ['./jurados-list.component.css']
})
export class JuradosListComponent implements OnInit {

  recordList: JuradosModel[] = [];
  
  constructor(
    private service: JuradosService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: JuradosModel[]) => {
        this.recordList = data;
      } 
    });
  }

}
