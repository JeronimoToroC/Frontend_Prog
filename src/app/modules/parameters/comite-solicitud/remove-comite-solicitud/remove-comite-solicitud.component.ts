import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/parameters/comite-solicitud.model';
import { ComiteSolicitudService } from 'src/app/services/parameters/comite-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-comite-solicitud',
  templateUrl: './remove-comite-solicitud.component.html',
  styleUrls: ['./remove-comite-solicitud.component.css']
})
export class RemoveComiteSolicitudComponent implements OnInit {
  id: number = 0;
  answer: string = "";

  constructor(
    private router: Router,
    private service: ComiteSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ComiteSolicitudModel) => {
        if (data.id && data.answer) {
          this.id = data.id;
          this.answer = data.answer;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/comite-solicitud-list"]);
      }
    });
  }

}