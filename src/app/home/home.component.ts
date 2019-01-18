import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter1: number = 0;
  counter2: number = 0;
  counter3: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
}
