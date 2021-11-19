import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  players: Player[] = [
    new Player (1, "Pedro", 30),
    new Player (2, "Jhon", 20),
    new Player (3, "Alex", 10)
  ]
  
  constructor() { }
}
