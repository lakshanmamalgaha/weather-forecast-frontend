import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active = "marcov";
  constructor() { }

  ngOnInit(): void {
  }

  toggle =(value) => {
    this.active = value;
  }
}
