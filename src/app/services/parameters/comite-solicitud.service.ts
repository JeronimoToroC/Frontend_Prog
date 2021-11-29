import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteSolicitudModel } from 'src/app/models/parameters/comite-solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteSolicitudService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ComiteSolicitudModel[]> {
    return this.http.get<ComiteSolicitudModel[]>(`${this.url}/comite-solicituds`);
  }

  SearchRecord(id: number): Observable<ComiteSolicitudModel> {
    return this.http.get<ComiteSolicitudModel>(`${this.url}/comite-solicituds/${id}`);
  }

  SaveRecord(data: ComiteSolicitudModel): Observable<ComiteSolicitudModel> {
    return this.http.post<ComiteSolicitudModel>(`${this.url}/comite-solicituds`,
      {
        answer: data.answer,
        tipoComiteId: data.tipoComiteId,
        tipoSolicitudId: data.tipoSolicitudId,
      });
  }

  EditRecord(data: ComiteSolicitudModel): Observable<ComiteSolicitudModel> {
    return this.http.put<ComiteSolicitudModel>(`${this.url}/comite-solicituds/${data.id}`,
      {
        answer: data.answer
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/comite-solicituds/${id}`);
  }

}