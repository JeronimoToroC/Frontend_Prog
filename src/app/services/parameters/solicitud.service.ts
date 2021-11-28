import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicitud`);
  }

  SearchRecord(id: number): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/solicitud/${id}`);
  }

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.post<SolicitudModel>(`${this.url}/solicitud`,
      {
        workName: data.workName,
        comiteType: data.comiteType,
        description: data.description,
        file: data.file,
        date_rad: data.date_rad,
      });
  }

  EditRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.put<SolicitudModel>(`${this.url}/solicitud/${data.id}`,
      {
        workName: data.workName,
        comiteType: data.comiteType,
        description: data.description,
        file: data.file,
        date_rad: data.date_rad,
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/solicitud/${id}`);
  }

}