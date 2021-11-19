import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnswerButtonComponent } from './answer-button/answer-button.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { OptionButtonComponent } from './option-button/option-button.component';
import { TittleComponent } from './tittle/tittle.component';
import { PlayercontainerComponent } from './playercontainer/playercontainer.component';
import { HttpClientModule } from '@angular/common/http' 


@NgModule({
  declarations: [
    AppComponent,
    AnswerButtonComponent,
    LoginPageComponent,
    GamePageComponent,
    ScorePageComponent,
    OptionButtonComponent,
    TittleComponent,
    PlayercontainerComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
