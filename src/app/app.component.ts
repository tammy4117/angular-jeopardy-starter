import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  userScore: number = 0;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  updateDisplay(potato: boolean){
    if(potato){
      this.userScore += this.questionInfo.value;
    }
    
    this.getQuestionInfo();
  }

  ngOnInit(){
    this.getQuestionInfo()
  }


}
