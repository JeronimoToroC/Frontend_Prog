import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';

@Injectable({
  providedIn: 'root'
})
export class JuradosService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<JuradosModel[]>{
    return this.http.get<JuradosModel[]>(`${this.url}/jurados`);
  }
}
