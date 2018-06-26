import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  score = 0;
  userAnswer

  questionInfo;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }

  grade(userAnswer){
    if(userAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.score += this.questionInfo.value;
    } else {
      this.score -= this.questionInfo.value;
    }
    this.getQuestionInfo()
  }
}
