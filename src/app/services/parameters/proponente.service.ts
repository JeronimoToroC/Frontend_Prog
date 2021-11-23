import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente.model';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<ProponenteModel[]>{
    return this.http.get<ProponenteModel[]>(`${this.url}/proponente`);
  }
}
