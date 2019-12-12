import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { UrlService } from '../url.service';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { MatRadioModule, MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: object;
  userChoices: [number, string][] = [[-1, "test"]];
  quizURL: string;
  mrButton: MatRadioButton;
  answerInList: boolean;
  submitMessage;

  

  constructor(private _http: HttpService, private _url: UrlService) { }


  ngOnInit() {
    this._url.currentQuizURL.subscribe(URL => this.quizURL = URL);
    console.log("quizURL in Quiz: " + this.quizURL);

    if(this.quizURL != "none") {
      this._http.getQuiz(this.quizURL).subscribe(data => {
        this.quizzes = data;
        console.log(this.quizzes);
      });
    }
  }



  onChange(mrChange: MatRadioChange) {
    console.log("onChange()");

    let mrButton = mrChange.source;
    console.log("mrButton.value: " + mrButton.value);
    var radioValue: string = mrButton.value;
    var radioGroupName: string = mrButton.name;
    var splitRadioGroupName: string[] = radioGroupName.split("-");
    var radioGroupNumber: number = parseInt(splitRadioGroupName[3]);
    var questionNumber: number = (radioGroupNumber/5) + 1;
    console.log("questionNumber: " + questionNumber);

    this.answerInList = false;
    for(let i=0; i<this.userChoices.length; i++) {
      if(this.userChoices[i][0] == questionNumber) {
        this.answerInList = true;
        this.userChoices.splice(i,1);
      }       
    }
    this.userChoices.push([questionNumber, radioValue]);
    
    console.log("userChoices: " + this.userChoices);
    console.log("userChoices[1]: " + this.userChoices[1]);


  }
  

  onSubmit() {
    if(this.userChoices.length > 0) {
      if(this.userChoices[0][0] == -1) {
        this.userChoices.splice(0,1);
      }
    }
    console.log("this.userChoices: " + this.userChoices);
    this._http.saveCompletedQuizzes(this.userChoices).subscribe(data => {
      this.submitMessage = data;
      console.log("this.submitMessage: " + this.submitMessage);
    });

    alert("Your quiz has been submitted.");
  }
  

}
