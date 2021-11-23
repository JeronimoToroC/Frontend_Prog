import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/models/parameters/comite.model';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;

  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<ComiteModel[]>{
    return this.http.get<ComiteModel[]>(`${this.url}/comite`);
  }
}
