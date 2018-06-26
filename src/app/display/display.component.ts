import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() otherQuestionInfo; //question info can be called whatever
  @Input() otherScore;
  @Output() answered = new EventEmitter();
  userAnswer;

  constructor() { }

  ngOnInit() {
  }

  grade(){
    this.answered.emit(this.userAnswer);
    this.userAnswer = "";

  }
}
