import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<FacultadModel[]> {
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`);
  }

  SearchRecord(id: number): Observable<FacultadModel> {
    return this.http.get<FacultadModel>(`${this.url}/facultads/${id}`);
  }

  SaveRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.post<FacultadModel>(`${this.url}/facultads`,
      {
        nombre: data.name,
        codigo: data.codigo
      });
  }

  EditRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.put<FacultadModel>(`${this.url}/facultad/${data.id}`,
      {
        nombre: data.name,
        codigo: data.codigo
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/facultad/${id}`);
  }

}