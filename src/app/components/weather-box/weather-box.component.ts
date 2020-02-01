import { Component, OnInit } from "@angular/core";
import * as weatherData from "../../core/services/weatherdata.json";

@Component({
  selector: "app-weather-box",
  templateUrl: "./weather-box.component.html",
  styleUrls: ["./weather-box.component.scss"]
})
export class WeatherBoxComponent implements OnInit {
  public singleWeatherData: any;
  private maxIndex = weatherData["length"] - 1;
  constructor() {}

  ngOnInit() {
    this.singleWeatherData =
      weatherData[`${this.getRandomDate(this.maxIndex)}`];
  }

  getRandomDate(maxIndex: number) {
    return (Math.random() * +maxIndex).toFixed();
  }
}
