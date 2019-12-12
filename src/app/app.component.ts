import { Component } from '@angular/core';
import { fadeAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Apollo-app';

  quizSelectURL: string;

  getQuizSelectURL($event) {
  	this.quizSelectURL = $event;
  }

}
