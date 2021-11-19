import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient} from '@angular/common/http'
import { ApiResponse } from './api-response.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentQuestion:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni soluta officia dignissimos, veritatis ea ab perspiciatis officiis temporibus, culpa molestiae esse repellendus quasi molestias ipsam doloribus.Adipisci expedita deleniti corrupti."
  answerOptions:string[]=[
    "Opcion 1",
    "Opcion 2",
    "Opcion 3",
    "Opcion 4"
  ]
  correctAnswer:string="Opcion 3"
  userService:UserService
  httpClient:HttpClient
  constructor(userService:UserService,httpClient:HttpClient) {
    this.userService=userService
    this.httpClient=httpClient
   }

  async getTriviaQuestion():Promise<ApiResponse>{
    console.log(this.userService.userName,this.userService.token)
    const data=await this.httpClient.get("http://localhost:4156/questions/single",{headers:{user:this.userService.userName,"access-token":this.userService.token}}).toPromise()
    const response=JSON.parse(JSON.stringify(data))
    return {status:response.status,message:response.message,data:response.data}
  }

  async setNewTriviaQuestion(){
    const response= await this.getTriviaQuestion()
    console.log(response)
    this.currentQuestion=response.data.question.question
    this.answerOptions=response.data.question.answers
    this.correctAnswer=response.data.question.correctAnswer
  }
  sendUserResponse(question:string,answer:string){
    this.httpClient.post("http://localhost:4156/questions/response",
    {
      question:question,
      answer:answer
    },
    {
    headers:{
      user:this.userService.userName,
      "access-token":this.userService.token
    } 
    }).toPromise()
  }
}