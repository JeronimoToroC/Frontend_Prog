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
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamento`);
  }

  SearchRecord(id: number): Observable<DepartamentoModel> {
    return this.http.get<DepartamentoModel>(`${this.url}/departamento/${id}`);
  }

  SaveRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.post<DepartamentoModel>(`${this.url}/departamento`,
      {
        nombre: data.name
      });
  }

  EditRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.put<DepartamentoModel>(`${this.url}/departamento/${data.id}`,
      {
        nombre: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/departamento/${id}`);
  }

}