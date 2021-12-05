import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UploadFile } from 'src/app/models/parameters/uploaded.file.model';
import { SolicitudJuradoModel } from 'src/app/models/parameters/solicitud-jurado.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudJuradoService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<SolicitudJuradoModel[]> {
    return this.http.get<SolicitudJuradoModel[]>(`${this.url}/solicitud-jurados`);
  }

  SearchRecord(id: number): Observable<SolicitudJuradoModel> {
    return this.http.get<SolicitudJuradoModel>(`${this.url}/solicitud-jurados/${id}`);
  }

  SaveRecord(data: SolicitudJuradoModel): Observable<SolicitudJuradoModel> {
    return this.http.post<SolicitudJuradoModel>(`${this.url}/solicitud-jurados`,
      {
        solicitudId: data.solicitudId,
        juradosId: data.juradosId,
        fechaInvitacion: data.fechaInvitacion,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: SolicitudJuradoModel): Observable<SolicitudJuradoModel> {
    return this.http.put<SolicitudJuradoModel>(`${this.url}/solicitud-jurados/${data.id}`,
      {
        id: data.id,
        solicitudId: data.solicitudId,
        juradosId: data.juradosId,
        fechaInvitacion: data.fechaInvitacion,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }


  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/solicitud-jurados/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
  MensajeInvitación(data: SolicitudJuradoModel): Observable<SolicitudJuradoModel> {
    return this.http.post<SolicitudJuradoModel>(`${this.url}/recuperar-contrasenia`,
      {
        juradosId: data.juradosId,
        linkaceptar: data.linkaceptar,
        linkrechazar: data.linkrechazar,
      });
  }
}