import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prestiti } from '../interfacce/prestiti';
import { Observable } from 'rxjs';
import { email } from '../interfacce/email';

@Injectable({
  providedIn: 'root'
})
export class PrestitiService {

  REST_PRESTITI = "http://127.0.0.1:8000/api/getprestiti";
  NOTIFY_MAIL = "http://127.0.0.1:8000/api/notify";
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getPrestiti(id: number): Observable<Prestiti[]> {
    return this.http.get<Prestiti[]>(this.REST_PRESTITI+'/'+id);
  }
  notifyPrestito(notifica: email) {
    return this.http.post(this.NOTIFY_MAIL, notifica, this.httpHeaders);
  }
}
