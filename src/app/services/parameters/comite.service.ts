import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ComiteModel } from 'src/app/models/parameters/comite.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ComiteModel[]> {
    return this.http.get<ComiteModel[]>(`${this.url}/tipo-comites`);
  }

  SearchRecord(id: number): Observable<ComiteModel> {
    return this.http.get<ComiteModel>(`${this.url}/tipo-comites/${id}`);
  }

  SaveRecord(data: ComiteModel): Observable<ComiteModel> {
    return this.http.post<ComiteModel>(`${this.url}/tipo-comites`,
      {
        nombre: data.nombre
      });
  }

  EditRecord(data: ComiteModel): Observable<ComiteModel> {
    return this.http.put<ComiteModel>(`${this.url}//tipo-comites/${data.id}`,
      {
        nombre: data.nombre
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//tipo-comites/${id}`);
  }

}