import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router: Router) {
  }

  // navigate to contact page on click
  onContact(){
    this.router.navigateByUrl('/contactus');
  }
}
