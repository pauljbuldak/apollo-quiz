import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { QuizselectorComponent } from './quizselector/quizselector.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'class', component: ClassComponent, data: {animation: 'ClassPage'} },
  { path: 'quizselector', component: QuizselectorComponent, data: {animations: 'QuizSelectPage'} },
  { path: 'quiz', component: QuizComponent, data: {animation: 'QuizPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
