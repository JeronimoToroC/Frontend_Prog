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
  name: string = "";
  descripcion: string = "";
  tipo_comite: string = "";

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
        if (data.id && data.nombre && data.descripcion && data.tipo_comite) {
          this.id = data.id;
          this.name = data.nombre;
          this.descripcion = data.descripcion;
          this.tipo_comite = data.tipo_comite;
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