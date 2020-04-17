import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WeatherService} from "../../core/services/weather.service";

@Component({
  selector: 'marcov',
  templateUrl: './marcov.component.html',
  styleUrls: ['./marcov.component.css']
})
export class MarcovComponent implements OnInit {
  formTemplate = new FormGroup({
    days: new FormControl(''),
    batalagoda: new FormControl(''),
    kurunagala: new FormControl(''),
    maspota: new FormControl(),
    currentFloodState: new FormControl()
  });
  isSubmitted = false;
  weatherData: any;
  areas= ['Rainfall Batalagoda','Rainfall Kurunagala','Rainfall Maspota', "Flood Chillaw"];
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
      //console.log(value);
      let data = {
        daysToForecast: value.days,
        currentRainBatalagoda: this.getStatus(value.batalagoda),
        currentRainKurunegala: this.getStatus(value.kurunagala),
        currentRainMaspota:this.getStatus(value.maspota),
        currentFloodState: value.currentFloodState
      };

      this.weatherService.weatherData(data).subscribe(res=>{
        const result = Object.keys(res.res).map(i => {
          return res.res[i]
        });
        ///console.log(result)

        this.weatherData = result;
        //console.log(typeof(this.weatherData))
        this.formTemplate.reset();

      })
    }

  }

  getStatus = (value) => {
    if(value ===0){
      return 'NoRain';
    }else if(value<50){
      return 'LightRain'
    }else{
      return 'HeavyRain'
    }
  }

}
