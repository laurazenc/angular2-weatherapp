export class Weather{
  constructor(public id: string, public weather: string, public temp: number, public humidity: number, public wind: number){
    this.id = id;
    this.weather = weather;
    this.temp = temp;
    this.humidity = humidity;
    this.wind = wind;
  }
}
