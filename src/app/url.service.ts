import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  
  private quizSelectURLSource = new BehaviorSubject("none");
  currentQuizSelectURL = this.quizSelectURLSource.asObservable();

  private quizURLSource = new BehaviorSubject("none");
  currentQuizURL = this.quizURLSource.asObservable();
  

  constructor() { }

  setQuizSelectURL(newQuizSelectURL: string) {
    this.quizSelectURLSource.next(newQuizSelectURL);
  }


  setQuizURL(newQuizURL: string) {
  	this.quizURLSource.next(newQuizURL);
  }


}
