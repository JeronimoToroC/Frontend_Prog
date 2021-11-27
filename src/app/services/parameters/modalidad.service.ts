import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ModalidadModel[]> {
    return this.http.get<ModalidadModel[]>(`${this.url}/marcas`);
  }

  SearchRecord(id: number): Observable<ModalidadModel> {
    return this.http.get<ModalidadModel>(`${this.url}/marcas/${id}`);
  }

  SaveRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.post<ModalidadModel>(`${this.url}/marcas`,
      {
        nombre: data.nombre
      });
  }

  EditRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.put<ModalidadModel>(`${this.url}/marcas/${data.id}`,
      {
        nombre: data.nombre
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/marcas/${id}`);
  }

}