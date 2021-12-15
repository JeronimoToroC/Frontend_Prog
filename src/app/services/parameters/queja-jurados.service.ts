import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { QuejaJuradosModel } from 'src/app/models/parameters/queja-jurados.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuejaJuradosService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService){
      this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<QuejaJuradosModel[]>{
    return this.http.get<QuejaJuradosModel[]>(`${this.url}/recordatorio-jurados-queja`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.tk}`
      })
    });
  }

  SaveRecord(data: QuejaJuradosModel): Observable<QuejaJuradosModel>{
    return this.http.post<QuejaJuradosModel>(`${this.url}/recordatorio-jurados-queja`,
    {
      fecha: data.fecha,
      juradoId: data.juradoId,
      resumen: data.resumen,
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  /* MensajeInvitación(data: QuejaJuradosModel): Observable<QuejaJuradosModel> {
    return this.http.post<QuejaJuradosModel>(`${this.url}/recuperar-contrasenia`,
      {
        fecha: data.fecha,
        juradoId: data.juradoId,
        resumen: data.resumen,
      });
  } */
}
