import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UploadFile } from 'src/app/models/parameters/uploaded.file.model';
import { EvaluacionSolicitudModel } from 'src/app/models/parameters/evaluacion-solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionSolicitudService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<EvaluacionSolicitudModel[]> {
    return this.http.get<EvaluacionSolicitudModel[]>(`${this.url}/evaluacion-solicituds`);
  }

  SearchRecord(id: number): Observable<EvaluacionSolicitudModel> {
    return this.http.get<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicituds/${id}`);
  }

  SaveRecord(data: EvaluacionSolicitudModel): Observable<EvaluacionSolicitudModel> {
    return this.http.post<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicituds`,
      {
        id_solicitud: data.id_solicitud,
        jurados: data.jurados,
        fechaInvitacion: data.fechaInvitacion,
        fechaRespuesta: data.fechaRespuesta,
        respuesta: data.respuesta,
        observaciones: data.observaciones
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: EvaluacionSolicitudModel): Observable<EvaluacionSolicitudModel> {
    return this.http.put<EvaluacionSolicitudModel>(`${this.url}/evaluacion-solicituds/${data.id}`,
      {
        id: data.id,
        id_solicitud: data.id_solicitud,
        jurados: data.jurados,
        fechaInvitacion: data.fechaInvitacion,
        fechaRespuesta: data.fechaRespuesta,
        respuesta: data.respuesta,
        observaciones: data.observaciones
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }


  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/evaluacion-solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
}