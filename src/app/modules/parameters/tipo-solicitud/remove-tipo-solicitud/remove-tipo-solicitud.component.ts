import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-tipo-solicitud',
  templateUrl: './remove-tipo-solicitud.component.html',
  styleUrls: ['./remove-tipo-solicitud.component.css']
})
export class RemoveTipoSolicitudComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) => {
        if (data.id && data.name) {
          this.id = data.id;
          this.name = data.name;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/tipo-solicitud-list"]);
      }
    });
  }

}