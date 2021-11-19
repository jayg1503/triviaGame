import { Component, OnInit, Input} from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-playercontainer',
  templateUrl: './playercontainer.component.html',
  styleUrls: ['./playercontainer.component.css']
})
export class PlayercontainerComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  
  @Input() player:Player | undefined;
}