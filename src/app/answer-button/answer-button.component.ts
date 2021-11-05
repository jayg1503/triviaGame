import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit Ejecutando");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Ejecutando", changes);
    
  }

  @Input() answer: string | undefined
  @Output() buttonSelected: EventEmitter <any> = new EventEmitter()

  variablecualquiera = 0  

  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
    this.variablecualquiera++
    console.log("NUMERO", this.variablecualquiera);
    
  }

}
