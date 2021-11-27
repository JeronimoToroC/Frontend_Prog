import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-facultad',
  templateUrl: './remove-facultad.component.html',
  styleUrls: ['./remove-facultad.component.css']
})
export class RemoveFacultadComponent implements OnInit {
  id: number = 0;
  name: string = "";
  codigo: string = "";

  constructor(
    private router: Router,
    private service: FacultadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        if (data.id && data.name && data.codigo) {
          this.id = data.id;
          this.name = data.name;
          this.codigo = data.codigo;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/facultad-list"]);
      }
    });
  }

}