import {Component, OnInit} from '@angular/core';
import {ControlGroup} from '@angular/common';
import {LocationService} from './location.service';
import {Weather} from '../weather/weather';
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'location-search',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)" required #input>
      <button type="submit">Add City</button>
    </form>
  `,
  providers: [LocationService]

})

export class LocationSearch  implements OnInit{
  private searchStream = new Subject<string>();
  data: any = {};
  weatherItem: Weather[];


  constructor(private _locationService: LocationService) {}

  ngOnInit() {
      this.searchStream
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap((input:string) => this._locationService.searchData(input))
          .subscribe(
            data => this.data = data
          );

  }

  onSubmit() {
    console.log(this.data);
    const weather = new Weather(this.data.name, this.data.weather[0].description, this.data.main.temp, this.data.main.humidity, this.data.wind.speed);
    this._locationService.setWeatherData(weather);
  }

  onSearchLocation(cityName:string) {
      this.searchStream
          .next(cityName);

  }
}
