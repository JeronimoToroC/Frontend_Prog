import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { RecordarJuradoModel } from 'src/app/models/parameters/recordar-jurado.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecordarJuradoService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<RecordarJuradoModel[]> {
    return this.http.get<RecordarJuradoModel[]>(`${this.url}/recordatorio-jurados`);
  }

  SearchRecord(id: number): Observable<RecordarJuradoModel> {
    return this.http.get<RecordarJuradoModel>(`${this.url}/recordatorio-jurados/${id}`);
  }

  SaveRecord(data: RecordarJuradoModel): Observable<RecordarJuradoModel> {
    return this.http.post<RecordarJuradoModel>(`${this.url}/recordatorio-jurados`,
      {
        juradosId: data.juradosId,
        //hola
      });
  }

  EditRecord(data: RecordarJuradoModel): Observable<RecordarJuradoModel> {
    return this.http.put<RecordarJuradoModel>(`${this.url}//recordatorio-jurados/${data.id}`,
      {
        id: data.id,
        juradosId: data.juradosId,
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//recordatorio-jurados/${id}`);
  }

}