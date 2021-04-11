import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weather: any;
  city: string = "";
  units: string = "metric";
  weatherImgURL: string = "";
  ngOnInit(): void {
  }

  getWeather(){
    this.weatherService.getWeather(this.city, this.units).subscribe((result)=>{
      this.weather = result;
      this.setBackground(this.weather.weather[0].id.toString());
    }), err =>{
      console.log(err);
    }
  }

  setBackground(id: string){
    switch(id.charAt(0)){
      case "2":
        this.weatherImgURL= "https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
        break;
      case "3":
        this.weatherImgURL = "https://images.pexels.com/photos/2423959/pexels-photo-2423959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        break;
      case "5":
        this.weatherImgURL = "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        break;
      case "6":
        this.weatherImgURL = "https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        break;
      case "7":
        this.weatherImgURL = "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        break;
      case "8":
        if(id == "800"){
          this.weatherImgURL = "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        else if(id.startsWith('80')){
          this.weatherImgURL = "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

        }
        break;
      default:
        this.weatherImgURL = "https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        break;                    
    }
    document.body.style.backgroundImage = "url(" + this.weatherImgURL + ")";
  }

  getTemperature(){
    return Math.round(this.weather.main.temp) + "°C"
  }

  getCondition(){
    this.getIcon(this.weather.weather[0].icon);
    return this.weather.weather[0].description;
  }

  getCountry(){
    return this.weather.sys.country
  }

  getIcon(icon: string){
    (document.getElementById("icon") as HTMLImageElement).src = "https://openweathermap.org/img/w/" + icon + ".png"
  }

}
