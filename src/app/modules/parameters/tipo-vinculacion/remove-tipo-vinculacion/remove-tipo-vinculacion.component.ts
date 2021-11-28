import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parameters/tipo-vinculacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-tipo-vinculacion',
  templateUrl: './remove-tipo-vinculacion.component.html',
  styleUrls: ['./remove-tipo-vinculacion.component.css']
})
export class RemoveTipoVinculacionComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: TipoVinculacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoVinculacionModel) => {
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
        this.router.navigate(["/parameters/tipo-vinculacion-list"]);
      }
    });
  }

}