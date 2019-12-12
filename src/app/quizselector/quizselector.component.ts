import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { UrlService } from '../url.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-quizselector',
  templateUrl: './quizselector.component.html',
  styleUrls: ['./quizselector.component.css']
})
export class QuizselectorComponent implements OnInit {

  quizSelect: object;
  quizSelectURL: string;
  quizURL: string;

  constructor(private _http: HttpService, private _url: UrlService) { }

  ngOnInit() {
    this._url.currentQuizSelectURL.subscribe(URL => this.quizSelectURL = URL);
    console.log("quizSelectURL in QuizSelector: " + this.quizSelectURL);

    if(this.quizSelectURL != "none") {
      this._http.getQuizSelect(this.quizSelectURL).subscribe(data => {
        this.quizSelect = data;
        console.log(this.quizSelect);
      });
    }
  }


  getWebsiteURL(quizName) {
    for(var index in this.quizSelect) {
      console.log(this.quizSelect[index].quizId + " URL: " + this.quizSelect[index].websiteURL);
      if(this.quizSelect[index].quizId == quizName) {
        if(this.quizSelect[index].websiteURL != "none") {
          this.quizURL = this.quizSelect[index].websiteURL;
          console.log("this.quizURL in QuizSelect: " + this.quizURL)
          this._url.setQuizURL(this.quizURL);
        }
        else {
          this._url.setQuizURL("none");
        }
      }
    }
  }

}
