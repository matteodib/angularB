import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import { UserResponse } from 'src/app/interfacce/UserResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private oggetto: any;
  load = false;
  form: FormGroup;
  nouser = false;
  logged = false;

  constructor(private fb: FormBuilder, private _login: LoginService, private _snack: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      utente: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('username') !== null) {
      this.router.navigate(['dashboard']);
    } else {

    }
  }
  private setUserLogged(body: any) {
    const now = new Date();
    const dieci = now.setSeconds(now.getSeconds() +100);
    const expiry = {
      value: body,
      expiry: dieci 
    }
    console.log(now);
    localStorage.setItem('username', JSON.stringify(expiry));
  }
  getValues() {
    this.nouser = false;
    const user = this.form.value.utente;
    const pass = this.form.value.password;
    const login = {
      "email": user,
      "password": pass
    }
    this._login.login(login).subscribe(data => {
      this.oggetto = data;
      if (this.oggetto.code == 201) {
        this.load = true;
        this.setUserLogged(this.oggetto.userobj.id);
        setTimeout(() => {
          this.load = false;
          this.router.navigate(['dashboard']);
        }, 2000)
      }
    }, error => {
      this.errore();
    });
  }
  errore() {
    this._snack.open('Non esistono user con questa email', '', {
      duration: 5000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    })
  }
  
}


