import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Menu} from "../interfacce/menu";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }

  loadMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('./assets/menu.json');
  }
}
