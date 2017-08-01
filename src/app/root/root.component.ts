import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser') || false;
    
    if (currentUser) {
      this.router.navigate(['/account']);
      
    } else {
      this.router.navigate(['/login']);
    }
  }

}
