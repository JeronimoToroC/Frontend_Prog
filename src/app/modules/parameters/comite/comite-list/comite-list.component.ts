import { Component, OnInit } from '@angular/core';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { ComiteService } from 'src/app/services/parameters/comite.service';

@Component({
  selector: 'app-comite-list',
  templateUrl: './comite-list.component.html',
  styleUrls: ['./comite-list.component.css']
})
export class ComiteListComponent implements OnInit {

  recordList: ComiteModel[] = [];


  constructor(
    private service: ComiteService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ComiteModel[]) => {
        this.recordList = data;
      } 
    });
  }

}
