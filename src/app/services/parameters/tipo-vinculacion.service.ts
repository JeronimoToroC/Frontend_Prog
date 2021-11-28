import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoVinculacionModel } from 'src/app/models/parameters/tipo-vinculacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {
  url: string = ConfigurationData.PRINCIPAL_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoVinculacionModel[]> {
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipo-vinculacions`);
  }

  SearchRecord(id: number): Observable<TipoVinculacionModel> {
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipo-vinculacions/${id}`);
  }

  SaveRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.post<TipoVinculacionModel>(`${this.url}/tipo-vinculacions`,
      {
        name: data.name
      });
  }

  EditRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.put<TipoVinculacionModel>(`${this.url}//tipo-vinculacions/${data.id}`,
      {
        name: data.name
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}//tipo-vinculacions/${id}`);
  }

}