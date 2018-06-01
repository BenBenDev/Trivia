import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultatQuizz } from '../../resultatquizz';


@Injectable()
export class QuizzProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuizzProvider Provider');
  }
  getQuizz(nbQuest, level){

    return new Promise<ResultatQuizz> ((resolve, reject) => {
      console.log('REQUEST = https://opentdb.com/api.php?amount='+nbQuest+'&difficulty='+level);
      // this.http.get('http://www.omdbapi.com/?apikey=1898fc97&s=world')
      this.http.get('https://opentdb.com/api.php?amount='+nbQuest+'&difficulty='+level)
          .toPromise()
          .then((response: any)=> {
            // console.log(response);
            let data = response.results;
            // for (let quest in data) {
            //   quest.Answers = [];
            //   let tab=[]
            //   tab = quest.Answers.push(quest.Correct_answer).push(quest.Incorrect_answers)
            //   this.shuffle(tab);
            //   quest.Answers = tab;
            // }
            console.log ('response from API : ' + data);
            resolve(data);
          })
          .catch((error)=> {
            reject(error);
          });
    });

  }

  public shuffle(a) {
    let j, x, i: number;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
