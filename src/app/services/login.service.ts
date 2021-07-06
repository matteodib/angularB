import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../interfacce/user";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { UserResponse } from '../interfacce/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  REST_API_LOGIN = "http://127.0.0.1:8000/api/angularlogin";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  public utente = new BehaviorSubject<UserResponse>({} as UserResponse);

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.REST_API_LOGIN, user, this.httpOptions);

  }
}
