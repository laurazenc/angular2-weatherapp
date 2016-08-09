import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from '../location/location.service';
import {Weather} from './weather';

@Component({
  selector: 'weather',
  // templateUrl: 'app/weather/weather.html',
  template: `
    <div class={{bgColorClass}}>
        <h1 class="city">{{weatherItem.id}}</h1>
        <div class="weather">
            <i class={{weatherClass}}></i>
        </div>
        <section class="weather-details">
            <div class="temp"><span class="temp-number">{{weatherItem.temp}}</span><span class="wi wi-degrees"></span></div>
            <div class="humidity">{{weatherItem.humidity}} <i class="wi wi-humidity"></i></div>
            <div class="wind"><i class="wi wi-small-craft-advisory"></i>{{weatherItem.wind}} <span class="vel">Km/h</span></div>
        </section>
    </div>
  `,
  inputs: ["weatherItem: item"]

})

export class weatherItem implements OnInit{
  bgColorClass: string;
  weatherClass: string;
  _locationService: LocationService;
  weatherItem: Weather;


  // constructor(private _locationService: LocationService){}
  //
  ngOnInit(){
    console.log(this.weatherItem);

    this.bgColorClass = 'weather-wrapper ';
    this.weatherClass = 'wi wi-';

    if(this.weatherItem.weather == "clear sky"){
        this.weatherClass += "day-sunny";
    }else if(this.weatherItem.weather == "few clouds"){
        this.weatherClass += "cloudy-high";
    }else if(this.weatherItem.weather == "scattered clouds"){
        this.weatherClass += "day-cloudy";
    }else if(this.weatherItem.weather == "broken clouds"){
        this.weatherClass += "cloudy";
    }else if(this.weatherItem.weather == "light rain"){
        this.weatherClass += "sleet";
    }


    if(this.weatherItem.temp >= 30 ){
      this.bgColorClass += 'very-warm';
    }else if (this.weatherItem.temp  > 20 && this.weatherItem.temp  < 30) {
      this.bgColorClass += 'warm';
    }
    else if (this.weatherItem.temp  > 10 && this.weatherItem.temp  < 20) {
      this.bgColorClass += 'normal';
    }
    else if (this.weatherItem.temp > 0 && this.weatherItem.temp < 10) {
      this.bgColorClass += 'cold';
    }
    else if (this.weatherItem.temp <= 0) {
      this.bgColorClass += 'very-cold';
    }
  }

}
