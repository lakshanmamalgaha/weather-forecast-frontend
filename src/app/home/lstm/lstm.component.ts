import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../core/services/weather.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'lstm',
  templateUrl: './lstm.component.html',
  styleUrls: ['./lstm.component.css']
})
export class LstmComponent implements OnInit {
  graphs;
  API_URL = environment.apiUrl;
  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.weather.getFiles().subscribe(res=>{
      //console.log(res)
      this.graphs = res.res;
    })
  }

  trainModel = () => {
    this.weather.trainLstmModel().subscribe(
      res=>{
        console.log(res);
      }
    )
    this.weather.analyzeModel().subscribe(res=>{
      console.log(res)
    })
  }

}
