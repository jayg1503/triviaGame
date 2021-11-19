import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {

  router:Router
  scoreService: ScoreService

  constructor( router: Router, scoreService: ScoreService ) {
    this.router = router
    this.scoreService=scoreService
  }

  ngOnInit(): void {
  }
  
  goToGame() {
    this.router.navigateByUrl('/game');
  }
}
