import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoSolicitudModel[]> {
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipo-solicituds`);
  }

  SearchRecord(id: number): Observable<TipoSolicitudModel> {
    return this.http.get<TipoSolicitudModel>(`${this.url}/tipo-solicituds/${id}`);
  }

  SaveRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel> {
    return this.http.post<TipoSolicitudModel>(`${this.url}/tipo-solicituds`,
      {
        name: data.name,
        format: data.format
      });
  }

  EditRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel> {
    return this.http.put<TipoSolicitudModel>(`${this.url}//tipo-solicituds/${data.id}`,
      {
        name: data.name,
        format: data.format
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//tipo-solicituds/${id}`);
  }

}