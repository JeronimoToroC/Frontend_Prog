import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ModalidadModel } from 'src/app/models/parameters/modalidad.model';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<ModalidadModel[]>{
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidad`);
  }
}
