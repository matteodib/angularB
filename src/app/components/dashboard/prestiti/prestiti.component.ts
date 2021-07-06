import { Component, OnInit } from '@angular/core';
import { PrestitiService } from 'src/app/services/prestiti.service';
import { Prestiti } from 'src/app/interfacce/prestiti';
import { email } from 'src/app/interfacce/email';

@Component({
  selector: 'app-prestiti',
  templateUrl: './prestiti.component.html',
  styleUrls: ['./prestiti.component.css']
})
export class PrestitiComponent implements OnInit {

  prestitiobj: Prestiti[] = [];
  dataSource = this.prestitiobj;
  displayedColumns: string[] = ['id', 'Utente', 'Libro', 'Inizio_prestito', 'Restituzione', 'azione'];
  booleano: boolean = false;
  currentUser = JSON.parse(localStorage.getItem('username') || '{}');

  constructor(private _prestiti: PrestitiService) { }

  ngOnInit(): void {
    let userId = this.currentUser.value;
    this._prestiti.getPrestiti(userId).subscribe(data => {
      this.prestitiobj = data;
      for (let index = 0; index < this.prestitiobj.length; index++) {
        const element = this.prestitiobj[index];
        if(element.restituito == undefined || element.restituito == null ) {
          element.restituito = 'Non ancora restituito';
        }
        
      }
      
    })
  }

  sendMail(element: Prestiti) {
    let email = {
      nome: element.user_id,
      email: element.email,
      libro: element.book_id
    }
    this.booleano = true;
    this._prestiti.notifyPrestito(email).subscribe(data => {
      this.booleano = false;
      console.log('email inviata')
    })
  }


}
