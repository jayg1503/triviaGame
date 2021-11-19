import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  userService: UserService
  router: Router

  constructor(userService: UserService, router: Router) {
    this.userService = userService
    this.router = router
  }

  ngOnInit(): void {
    const isLogIn:boolean = this.userService.checkLogInUser ()
    if (isLogIn == true) {
      this.router.navigateByUrl("/game")
    }
  }

  userName = ""
  userPassword = ""

  async onUserNameCreate () {
    if(this.userName==="" || this.userPassword==="") {
      alert ("Se debe ingresar un nombre y un password, el campo no debe estar vacio")
      return
    }
    const loginValidation = await this.userService.createUserName(this.userName, this.userPassword)
    if (loginValidation == true) {
      this.router.navigateByUrl('/game');
    } else {
      alert("error al iniciar sesión, valide clave")
    }

  } 
}
