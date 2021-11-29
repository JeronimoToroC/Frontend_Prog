import { Component, OnInit } from '@angular/core';
import { UserDataModel } from 'src/app/models/security/user-data.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  recordList: UserDataModel[] = [];


  constructor( 
    private service: UsuariosService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: UserDataModel[]) => {
        this.recordList = data;
      } 
    });
  }

}
