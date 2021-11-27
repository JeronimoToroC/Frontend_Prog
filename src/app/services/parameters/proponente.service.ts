import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  token:string = this.localStorageService.GetToken();

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService){
  }
  GetRecordList(): Observable<ProponenteModel[]>{
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
