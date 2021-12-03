import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';
import { UserDataModel } from 'src/app/models/security/user-data.model';


@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  recordList: SolicitudModel[] = [];

  p: number = 1;
  pageSize: number = 3;
  totalAmount: number = 0;

  constructor(
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

   isShow(r: UserDataModel) {
    if (r.rolesId === "admin") {
      return false
    } else {
      return true
    }
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      } 
    });
  }

}
