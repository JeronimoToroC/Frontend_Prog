import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-departamento',
  templateUrl: './remove-departamento.component.html',
  styleUrls: ['./remove-departamento.component.css']
})
export class RemoveDepartamentoComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
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
        this.router.navigate(["/parameters/departamento-list"]);
      }
    });
  }

}