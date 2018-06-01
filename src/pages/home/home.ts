import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuizzPage} from "../quizz/quizz";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nbQuest: number;
  public level: string;
  constructor(public navCtrl: NavController) {

  }

  public goToQuizz(nbQuest, level) {
    this.navCtrl.push(QuizzPage, {
      nbQuest: nbQuest,
      level: level
    } );
  }
}
