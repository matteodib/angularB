import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../../services/navbar.service";
import {Menu} from "../../../interfacce/menu";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  voci: Menu[] = [];
  constructor(private _menu: NavbarService) { }

  ngOnInit(): void {
    this._menu.loadMenu().subscribe(data => {
      this.voci = data;
    })
  }

}
