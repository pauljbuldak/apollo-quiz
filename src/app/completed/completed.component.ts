import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  
  userAnswers;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this._http.getCompletedQuizzes().subscribe(data => {
  		this.userAnswers = data;
  		console.log("this.userAnswers: " + this.userAnswers);
  	})

  }

}
