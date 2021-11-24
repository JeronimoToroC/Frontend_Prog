import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad.model';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;
token: string = "";
  constructor(private http: HttpClient){

  }
  GetRecordList(): Observable<FacultadModel[]>{
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
