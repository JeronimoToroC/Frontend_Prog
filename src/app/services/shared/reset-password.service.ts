import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResetPasswordModel } from 'src/app/models/security/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  url: string = ConfigurationData.SECURITY_MS_URL;

  constructor(private http: HttpClient) {
  }

  ResetPassword(data: ResetPasswordModel): Observable<ResetPasswordModel> {
    return this.http.post<ResetPasswordModel>(`${this.url}/recuperar-contrasenia`,
      {
        email: data.email
      });
  }

}