import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarcovComponent} from "./marcov/marcov.component";
import {LstmComponent} from "./lstm/lstm.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path:"lstm",
  component: LstmComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
