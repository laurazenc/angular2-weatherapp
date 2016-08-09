import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {WEATHER_DATA} from '../weather/weather-data';
import {Weather} from '../weather/weather';
import {Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LocationService {
  weather: Weather;
  id: string = '89f7793f09205f743c73560456f7b4d8';
  baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private _http: Http){  }

  getWeatherData() {
    return WEATHER_DATA;
  }

  setWeatherData(weatherItem: Weather){
    WEATHER_DATA.splice(0,1);
    WEATHER_DATA.push(weatherItem);
    console.log(WEATHER_DATA);

  }

  searchData(cityName: string): Observable<any>{
    return this._http.get(this.baseUrl + cityName + '&APPID=' + this.id + '&units=metric')
                    .map( response => response.json())
                    .catch(error => {
                      console.error(error);
                      return Observable.throw(error.json())
                    });
  }
}
