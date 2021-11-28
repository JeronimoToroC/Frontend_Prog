import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<DepartamentoModel[]> {
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos`);
  }

  SearchRecord(id: number): Observable<DepartamentoModel> {
    return this.http.get<DepartamentoModel>(`${this.url}/departamentos/${id}`);
  }

  SaveRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.post<DepartamentoModel>(`${this.url}/departamentos`,
      {
        name: data.name,
        facultadId: data.facultadId
      });
  }

  EditRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.put<DepartamentoModel>(`${this.url}/departamentos/${data.id}`,
      {
        name: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/departamentos/${id}`);
  }

}