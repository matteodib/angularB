import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../interfacce/book";
import { addPrestito } from '../interfacce/addprestito';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  REST_BOOKS = "http://127.0.0.1:8000/api/books";
  REST_BOOK = "http://127.0.0.1:8000/api/book/";
  REST_PRESTITO = "http://127.0.0.1:8000/api/setprestito";
  constructor(private http: HttpClient) { }

  loadBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.REST_BOOKS);
  }
  getBook(i: number)  {
    return this.http.get(this.REST_BOOK+i);
  }
  addNewPrestito(prestito: addPrestito) {
    return this.http.post(this.REST_PRESTITO, prestito);
  }
}
