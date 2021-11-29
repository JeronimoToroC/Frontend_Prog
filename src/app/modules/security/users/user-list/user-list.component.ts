import { Component, OnInit } from '@angular/core';
import { UserDataModel, RolesModel } from 'src/app/models/security/user-data.model';
import { UsuariosService } from 'src/app/services/parameters/usuarios.service';
import { RolesService } from 'src/app/services/parameters/roles.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  recordList: UserDataModel[] = [];
  rolesList: RolesModel[] = [];


  constructor(
    private service: UsuariosService,
    private serciveRol: RolesService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }
  isShow(r: UserDataModel) {
    if (r.rolesId !== "sin rol") {
      return false
    } else {
      return true
    }
  }

  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (userData) => {
        let userArray: UserDataModel = {}
        const dataUser: Array<any> = []
        this.serciveRol.GetRecordList().subscribe({
          next: (rolesData: RolesModel[]) => {
            for (let i = 0; i < userData.length; i++) {
              rolesData.find(e => e._id === userData[i].rolesId && (
                userArray = {
                  cell: userData[i].cell,
                  email: userData[i].email,
                  lastName: userData[i].lastName,
                  name: userData[i].name,
                  password: userData[i].password,
                  rolesId: e.nombre,
                  _id: userData[i]._id
                },
                dataUser.push(userArray)
              ))
              this.recordList = dataUser
            }
          }
        })
      }
    });
  }

}
