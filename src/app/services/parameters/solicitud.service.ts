import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitud`);
  }
}
