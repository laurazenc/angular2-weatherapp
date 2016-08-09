import {Component, OnInit} from "@angular/core";
import {weatherItem} from "./weather-item.component";
import {LocationService} from "../location/location.service";
import {Weather} from './weather';

@Component({
    selector: 'weather-component',
    template: `
        <section class="weather-list">
            <weather *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather>
        </section>
    `,
    directives: [weatherItem]
})
export class WeatherComponent implements OnInit {
    weatherItems: Weather[];

    constructor(private _locationService: LocationService) {}

    ngOnInit() {
        this.weatherItems = this._locationService.getWeatherData();
      
    }
}
