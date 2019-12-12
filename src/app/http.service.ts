import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getClass() {
  	return this.http.get('https://Apollo-Data.azurewebsites.net/ogwbc0nwch.json');
  }

  getQuizSelect(URL) {
  	return this.http.get(URL);
  }

  getQuiz(URL) {
  	return this.http.get(URL);
  }

  getCompletedQuizzes() {
    return this.http.get("load-quizzes.php");
  }

  saveCompletedQuizzes(userAnswers) {
    var answers = JSON.stringify(userAnswers);
    const headers = new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded");
    return this.http.post("save-quizzes.php", answers, {headers});
  }
}
