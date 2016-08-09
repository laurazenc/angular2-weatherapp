import { Component, OnInit } from '@angular/core';
import {WeatherComponent} from './weather/weather.component';
import {LocationSearch} from './location/location-search.component';
import {LocationService} from './location/location.service';

@Component({
  selector: 'my-app',
  template: `
    <location-search></location-search>
    <weather-component></weather-component>
  `,
  directives: [LocationSearch, WeatherComponent]
})

export class AppComponent{

}
