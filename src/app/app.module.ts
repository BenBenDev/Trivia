import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizzProvider } from '../providers/quizz/quizz';
import { QuizzPage } from "../pages/quizz/quizz";
import { QuizzPageModule } from "../pages/quizz/quizz.module";
import { ScorePage } from "../pages/score/score";
import { ScorePageModule } from "../pages/score/score.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuizzPageModule,
    HttpClientModule,
    ScorePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuizzPage,
    HomePage,
    ScorePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizzProvider
  ]
})
export class AppModule {}
