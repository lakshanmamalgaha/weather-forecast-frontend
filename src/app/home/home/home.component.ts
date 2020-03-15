import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WeatherService} from "../../core/services/weather.service";

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
  weatherData: any;
  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    let data = {
      "daysToForecast":20,
      "currentRainBatalagoda": "NoRain",
      "currentRainKurunegala":"LightRain",
      "currentRainMaspota":"HeavyRain",
      "currentFloodState":"Critical"
    };
    // this.weatherService.weatherData(data).subscribe(res=>{
    //   const result = Object.keys(res.res).map(i => {
    //     return res.res[i]
    //   });
    //   console.log(result)
    //
    //   this.weatherData = result;
    //   console.log(typeof(this.weatherData))
    //
    // })
  }

  get formControls() {
    return this.formTemplate.controls;
  }

  calculate = (value) => {
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      console.log(value)
      let data = {
        daysToForecast: value.days,
        currentRainBatalagoda: value.batalagoda,
        currentRainKurunegala: value.kurunagala,
        currentRainMaspota:value.maspota,
        currentFloodState:"Critical"

      }

      this.weatherService.weatherData(data).subscribe(res=>{
        const result = Object.keys(res.res).map(i => {
          return res.res[i]
        });
        console.log(result)

        this.weatherData = result;
        console.log(typeof(this.weatherData))

      })
    }

  }

}