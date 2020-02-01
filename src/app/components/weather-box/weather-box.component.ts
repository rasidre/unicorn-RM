import { Component, OnInit } from "@angular/core";
import * as weatherData from "../../core/services/weatherdata.json";

@Component({
  selector: "app-weather-box",
  templateUrl: "./weather-box.component.html",
  styleUrls: ["./weather-box.component.scss"]
})
export class WeatherBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(weatherData['length']);
  }
}
