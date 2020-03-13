import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formTemplate = new FormGroup({
    days: new FormControl(''),
    batalagoda: new FormControl(''),
    kurunagala: new FormControl(''),
    maspota: new FormControl()
  });
  isSubmitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  calculate = (value) => {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      console.log(value)
    }

  }

}
