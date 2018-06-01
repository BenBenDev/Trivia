import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Question } from '../../models/question';
import {QuizzProvider} from "../../providers/quizz/quizz";
import {ScorePage} from "../score/score";


@IonicPage()
@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {
  public nbQuest: number;
  public level:string;
  public quizz: Array<Question> = [];
  public currentAnswer: number =0;
  public score: number =0;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public quizzProvider: QuizzProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzPage');
    this.nbQuest = this.navParams.get("nbQuest");
    this.level = this.navParams.get("level");
    console.log('LEVEL : ' +this.level);

   //this.quizz = this.quizzProvider.getQuizz(this.nbQuest, this.level);


    this.quizzProvider.getQuizz(this.nbQuest, this.level)
        .then((resultat) => {
          this.quizz = resultat;
          console.log (this.quizz);
        })
        .catch((error) => {
          this.quizz = [];
          this.alertController.create({
            title: 'Erreur',
            subTitle: 'La recherche ne renvoie aucun résultat',
            buttons: ['Compris']
          }).present();
        });

  }

  public verifAnswer(rep){
    this.currentAnswer++;

    if (rep == 100){
      this.score++;
    }
    if (this.currentAnswer > this.nbQuest) {
      this.goToScore()
    }
  }

  public goToScore() {
    this.navCtrl.push(ScorePage, {
      nbQuest: this.nbQuest,
      level: this.level,
      score: this.score
    } );
  }
  public backToMainPage() {
    this.navCtrl.popToRoot();
  }
}
