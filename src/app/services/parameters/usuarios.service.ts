import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserDataModel } from 'src/app/models/security/user-data.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string = ConfigurationData.SECURITY_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<UserDataModel[]> {
    return this.http.get<UserDataModel[]>(`${this.url}/usuarios`);
  }

  SearchRecord(_id: number): Observable<UserDataModel> {
    return this.http.get<UserDataModel>(`${this.url}/usuarios/${_id}`);
  }

  SaveRecord(data: UserDataModel): Observable<UserDataModel> {
    return this.http.post<UserDataModel>(`${this.url}/usuarios`,
      {
        name: data.name,
        lastName: data.lastName,
        document: data.document,
        email: data.email,
        cell: data.cell,
        rolesId: data.rolesId,
        foto: data.foto
      });
  }

  EditRecord(data: UserDataModel): Observable<UserDataModel> {
    return this.http.put<UserDataModel>(`${this.url}/usuarios/${data._id}`,
      {
        name: data.name,
        lastName: data.lastName,
        document: data.document,
        email: data.email,
        cell: data.cell,
        rolesId: data.rolesId,
        foto: data.foto
      });
  }


  RemoveRecord(_id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/usuarios/${_id}`);
  }

  SendPassword(data:UserDataModel):Observable<UserDataModel> {
      return this.http.post<UserDataModel>(`${this.url}//enviar-contrasenia`,
      {
        email: data.email
      });

  }

}

