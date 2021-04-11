import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  API_KEY: String = "1b30b026f8534761a80d474a949ff40f"

  getWeather(city: string, units: string){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units +  "&APPID=" + this.API_KEY)
  }
}
