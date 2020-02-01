import { Component, OnInit, Input } from "@angular/core";
import {
  SearchService,
  ISearchResultItem
} from "app/core/services/search.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  @Input() renderType: string;
  @Input() requestedQuestions: number;
  @Input() contentType: string;
  public questions: Array<ISearchResultItem>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    /* 
      - Call service and cut sorted array after 10 elements (0 - 9)
      - Could have called service to return only 10 elements (instead of pagesize=20 set pagesize=10)
    */
    this.searchService.search(this.contentType).subscribe(response => {
      this.questions = response["items"].slice(0, this.requestedQuestions);
    });
  }
}
