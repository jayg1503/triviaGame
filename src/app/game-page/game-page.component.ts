import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  userService: UserService
  router: Router
  gameService: GameService
  correctAnswer:number=-1
  //-1: no responde.
  //0: incorrecto.
  //1: correcto.

  constructor(service: UserService, router: Router, gameService: GameService) { 
    this.userService = service
    this.router = router
    this.gameService = gameService
  }
    

  ngOnInit(): void {
    this.userService.checkLogInUser()
    this.gameService.setNewTriviaQuestion()
  }

  signOut(){
    this.userService.signOut()
    this.router.navigateByUrl('/login')
    console.log("otro hola")
    
  }

  selectAnswer (answer:string) {
    console.log(answer)
    if(answer==this.gameService.correctAnswer) {
      this.correctAnswer=1
    }else {
      this.correctAnswer=0
    }
    this.gameService.sendUserResponse(this.gameService.currentQuestion,answer)
  }

  goToLeaderBoard() {
    this.router.navigateByUrl('/score')
  }

  nextQuestion() {
    this.correctAnswer=-1
    this.gameService.setNewTriviaQuestion()
    
  }


  
}
