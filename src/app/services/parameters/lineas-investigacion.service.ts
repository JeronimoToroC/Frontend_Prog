import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { LineasInvestigacionModel } from 'src/app/models/parameters/lineas-investigacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LineasInvestigacionService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<LineasInvestigacionModel[]> {
    return this.http.get<LineasInvestigacionModel[]>(`${this.url}/lineas-investigacions`);
  }

  SearchRecord(id: number): Observable<LineasInvestigacionModel> {
    return this.http.get<LineasInvestigacionModel>(`${this.url}/lineas-investigacions/${id}`);
  }

  SaveRecord(data: LineasInvestigacionModel): Observable<LineasInvestigacionModel> {
    return this.http.post<LineasInvestigacionModel>(`${this.url}/lineas-investigacions`,
      {
        name: data.name
      });
  }

  EditRecord(data: LineasInvestigacionModel): Observable<LineasInvestigacionModel> {
    return this.http.put<LineasInvestigacionModel>(`${this.url}//lineas-investigacions/${data.id}`,
      {
        name: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//lineas-investigacions/${id}`);
  }

}