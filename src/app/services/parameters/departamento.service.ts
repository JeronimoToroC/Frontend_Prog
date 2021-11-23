import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<DepartamentoModel[]>{
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamento`);
  }
}
