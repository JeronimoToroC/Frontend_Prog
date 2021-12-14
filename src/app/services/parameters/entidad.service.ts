import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EntidadModel } from 'src/app/models/parameters/entidad.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<EntidadModel[]> {
    return this.http.get<EntidadModel[]>(`${this.url}/entidads`);
  }

  SearchRecord(id: number): Observable<EntidadModel> {
    return this.http.get<EntidadModel>(`${this.url}/entidads/${id}`);
  }

  SaveRecord(data: EntidadModel): Observable<EntidadModel> {
    return this.http.post<EntidadModel>(`${this.url}/entidads`,
      {
        name: data.name
      });
  }

  EditRecord(data: EntidadModel): Observable<EntidadModel> {
    return this.http.put<EntidadModel>(`${this.url}//entidads/${data.id}`,
      {
        name: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//entidads/${id}`);
  }

}