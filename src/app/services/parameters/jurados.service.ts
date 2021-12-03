import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradosModel } from 'src/app/models/parameters/jurados.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradosService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService){
      this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<JuradosModel[]>{
    return this.http.get<JuradosModel[]>(`${this.url}/jurados`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.tk}`
      })
    });
  }

  SaveRecord(data: JuradosModel): Observable<JuradosModel>{
    return this.http.post<JuradosModel>(`${this.url}/jurados`,
    {
      nombre: data.name
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
