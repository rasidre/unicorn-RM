import { Component, OnInit, Input } from "@angular/core";
import { ISearchResultItem } from "app/core/services/search.service";

@Component({
  selector: "app-question-box",
  templateUrl: "./question-box.component.html",
  styleUrls: ["./question-box.component.scss"]
})
export class QuestionBoxComponent implements OnInit {
  @Input() question: ISearchResultItem;
  public renderQuestion: ISearchResultItem;

  constructor() {}

  ngOnInit() {
    this.renderQuestion = this.question
  }
}
