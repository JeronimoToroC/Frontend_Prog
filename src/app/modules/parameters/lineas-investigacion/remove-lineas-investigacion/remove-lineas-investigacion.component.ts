import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { LineasInvestigacionService } from 'src/app/services/parameters/lineas-investigacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-lineas-investigacion',
  templateUrl: './remove-lineas-investigacion.component.html',
  styleUrls: ['./remove-lineas-investigacion.component.css']
})
export class RemoveLineasInvestigacionComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: LineasInvestigacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: LineasInvestigacionModel) => {
        if (data.id && data.nombre) {
          this.id = data.id;
          this.name = data.nombre;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/lineas-investigacion-list"]);
      }
    });
  }

}