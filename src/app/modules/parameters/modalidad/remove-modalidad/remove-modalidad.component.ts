import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { ModalidadService } from 'src/app/services/parameters/modalidad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-modalidad',
  templateUrl: './remove-modalidad.component.html',
  styleUrls: ['./remove-modalidad.component.css']
})
export class RemoveModalidadComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: ModalidadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
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
        this.router.navigate(["/parameters/modalidad-list"]);
      }
    });
  }

}