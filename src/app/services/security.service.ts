import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserCredentialsModel } from 'src/app/models/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: string = ConfigurationData.SECURITY_MS_URL;

  constructor(private http: HttpClient){

  }

  Login(data: UserCredentialsModel): Observable<any> {
    return this.http.post(`${this.url}/identificar-usuario`, {
      usuario: data.username,
      password: data.password
    });
  }

}