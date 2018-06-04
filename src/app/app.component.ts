import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';

  questionInfo;
  score = 0;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        (apiResults) => {
          this.questionInfo = apiResults[0];
          console.log(this.questionInfo.answer)
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }

  updateScore(usersAnswer){

    if (!usersAnswer) {
      alert("submit an answer dummy!")
      return false;
    }
  
    if (usersAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      this.score += this.questionInfo.value;
    } else {
      this.score -= this.questionInfo.value;
    }

    this.getQuestionInfo();

  }


}
