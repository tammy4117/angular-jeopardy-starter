import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() childQuestionInfo: any;
  @Input() childScore: number;
  @Input() childTitle: string;

  @Output() userGuessed = new EventEmitter();

  userAnswer: string;

  constructor() { }

  ngOnInit() {
  }

  scoreRound() {
    
    this.userGuessed.emit(this.userAnswer)
    this.userAnswer = "";

  }

}
