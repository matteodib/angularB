import { Component, Input, OnInit } from '@angular/core';
import {Book} from "../../../interfacce/book";
import {BooksService} from "../../../services/books.service";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { User } from 'src/app/interfacce/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import '@angular/common/locales/global/it';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {
  books: Book[] = [];
  public selectedBook: any;
  displayedColumns: string[] = [ 'titolo', 'anno_pubb', 'isbn', 'id'];
  bool: boolean = false;
  prestito: FormGroup;
  disableSelect = new FormControl(false);
  selectedSelect!: string;
  selectedCopertina!: string;
  constructor(private _books: BooksService, private fb: FormBuilder, private _user: LoginService, private router: Router) {
    this.prestito = this.fb.group({
      id: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
    this._books.loadBooks().subscribe(data => {
      this.books = data;
    })
  }
  getBook(i: number) {
    return this._books.getBook(i).subscribe(book => {
      this.selectedBook = book;
      this.bool = true;
      let copertina = JSON.stringify(this.selectedBook.copertina);
      let string_copertina = copertina.replace(/['"]+/g, '');
      this.selectedCopertina = string_copertina;
      this.selectedSelect = JSON.stringify(this.selectedBook.id);
      
    })
  }
  setPrestito() {
    const user_log = JSON.parse(localStorage.getItem('username') || '{}');
    
    const oggi = formatDate( new Date(), 'yyyy-MM-dd', 'it-IT');
    const post_json = {
      book_id: parseInt(this.selectedSelect),
      user_id: user_log.value,
      day: oggi
    }
    this._books.addNewPrestito(post_json).subscribe(response => {
      console.log(response);
    })
  }
  closePrestito() {
    
    this.bool = false;
  }
}
