import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('username') === null) {
      this.router.navigate(['login']);
    } else {
      const loggedSince = localStorage.getItem('username');
      const json =JSON.parse(loggedSince || '{}');
      const now = new Date();
      if (now.getTime() > json.expiry ) {
        console.log(now.getTime())
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem('username')
        
      }
    }
  }
}
