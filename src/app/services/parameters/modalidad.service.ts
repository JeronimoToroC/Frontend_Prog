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
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidads`);
  }

  SearchRecord(id: number): Observable<ModalidadModel> {
    return this.http.get<ModalidadModel>(`${this.url}/modalidads/${id}`);
  }

  SaveRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.post<ModalidadModel>(`${this.url}/modalidads`,
      {
        name: data.name
      });
  }

  EditRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.put<ModalidadModel>(`${this.url}/modalidads/${data.id}`,
      {
        name: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/modalidads/${id}`);
  }

}