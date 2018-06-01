import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../models/question';
import {QuizzProvider} from "../../providers/quizz/quizz";

/**
 * Generated class for the QuizzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {
  public nbQuest: number;
  public level:string;
  public quizz: Array<Question> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public quizzProvider: QuizzProvider) {
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad QuizzPage');
    this.nbQuest = this.navParams.get("nbQuest");
    this.level = this.navParams.get("level");
    console.log(this.level);

   //this.quizz = this.quizzProvider.getQuizz(this.nbQuest, this.level);


    this.quizzProvider.getQuizz(this.nbQuest, this.level)
        .then((resultat) => {
          this.quizz = resultat;
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

}