import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { UploadFile } from 'src/app/models/parameters/uploaded.file.model';


@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  token: string = this.localStorageService.GetToken();

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
  }
  GetRecordList(): Observable<ProponenteModel[]> {
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`,
      {
        name: data.name,
        lastName: data.lastName,
        document: data.document,
        email: data.email,
        cell: data.cell,
        rolesId: data.rolesId,
        foto: data.foto,
        tipoVinculacionId: data.tipoVinculacionId
      });
  }

  UploadMainFormat(form: FormData): Observable<UploadFile> {
    return this.http.post<UploadFile>(`${this.url}/CargarDocumento`,
   
    form,
    {
    })

  }

}
