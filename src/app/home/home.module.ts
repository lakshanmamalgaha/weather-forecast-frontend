import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MarcovComponent } from './marcov/marcov.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LstmComponent } from './lstm/lstm.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [MarcovComponent, LstmComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
