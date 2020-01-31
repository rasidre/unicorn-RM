import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionBoxComponent } from "./question-box/question-box.component";
import { WeatherBoxComponent } from "./weather-box/weather-box.component";

@NgModule({
  imports: [CommonModule],
  declarations: [QuestionBoxComponent, WeatherBoxComponent],
  exports: [QuestionBoxComponent, WeatherBoxComponent]
})
export class ComponentModule {}
