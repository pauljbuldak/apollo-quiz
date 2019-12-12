import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { UrlService } from '../url.service';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classes: Object;
  quizSelectURL: string;

  constructor(private _http: HttpService, private _url: UrlService) { }

  ngOnInit() {
  	this._http.getClass().subscribe(data => {
  		this.classes = data;
      console.log(this.classes);
  	});
    
  }

  getWebsiteURL(className) {
    for(var index in this.classes) {
      console.log(this.classes[index].name + " quizzes URL: " + this.classes[index].websiteURL);
      if(this.classes[index].name == className) {
        if(this.classes[index].websiteURL != "none") {
          this.quizSelectURL = this.classes[index].websiteURL;
          console.log("this.quizSelectURL in Class: " + this.quizSelectURL)
          this._url.setQuizSelectURL(this.quizSelectURL);
        }
        else {
          this._url.setQuizSelectURL("none");
        }
      }
    }
  }

  
}
