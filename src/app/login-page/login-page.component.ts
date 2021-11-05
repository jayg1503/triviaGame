import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  userService: UserService

  constructor(userService: UserService) {this.userService = userService}

  ngOnInit(): void {
  }

  userName = ""

  onUserNameCreate () {
    this.userService.createUserName(this.userName)
  }

}
