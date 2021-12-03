import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-solicitud',
  templateUrl: './remove-solicitud.component.html',
  styleUrls: ['./remove-solicitud.component.css']
})
export class RemoveSolicitudComponent implements OnInit {
  id: number = 0;
  workName: string = "";
  dateRad: string = "";
  description: string = "";
  file: any = "";
  comiteType: any = "";

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        if (data.id && data.dateRad && data.workName && data.description && data.comiteType && data.file ) {
          this.id = data.id;
          this.workName = data.workName;
          this.dateRad = data.dateRad;
          this.description = data.description;
          this.comiteType = data.comiteType;
          this.file = data.file
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-list"]);
      }
    });
  }

}