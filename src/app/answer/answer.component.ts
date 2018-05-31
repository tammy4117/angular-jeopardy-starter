import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() questionInfo; 
  userAnswer:string = "";
  message:string;
  @Output() scored = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  submitAnswer(){
    let correct = false;
    if(this.userAnswer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.message = "Great Job!"
      correct = true;
    }else{
      this.message = "Loser!!!!"
    }
    this.scored.emit(correct)
  }

}
