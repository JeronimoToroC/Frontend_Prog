import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';


@Component({
  selector: 'app-solicitud-showm',
  templateUrl: './solicitud-showm.component.html',
  styleUrls: ['./solicitud-showm.component.css']
})
export class SolicitudShowmComponent implements OnInit {

  recordList: SolicitudModel[] = [];

  constructor(
    private service: SolicitudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
    this.SearchRecord();
  }

 

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
    });
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.recordList = data;
      } 
    });
  }

}
