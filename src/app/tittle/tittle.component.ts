import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () tittleText: string = "TRIVIA"; 

}
