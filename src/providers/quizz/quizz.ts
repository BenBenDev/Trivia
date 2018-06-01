import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultatQuizz } from '../../models/resultat-quizz';

/*
 - Développer un provider "QuizzProvider"
 qui expose une méthode "getQuizz" qui récupère une liste de X questions depuis l'API OpenTrivia, selon un niveau de difficulté
 - La méthode "getQuizz" doit renvoyer un tableau de questions ou renvoyer une erreur
 - La documentation de l'API OpenTrivia se trouve à l'adresse suivante : https://opentdb.com/api_config.php
 ex : https://opentdb.com/api.php?amount=10&difficulty=easy
 */
@Injectable()
export class QuizzProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuizzProvider Provider');
  }
  getQuizz(nbQuest, level){

    return new Promise<ResultatQuizz> ((resolve, reject) => {
      console.log('REQUEST = https://opentdb.com/api.php?amount=10&difficulty=medium');
        // this.http.get('http://www.omdbapi.com/?apikey=1898fc97&s=world')
        this.http.get('https://opentdb.com/api.php?amount='+nbQuest+'&difficulty='+level)
          .toPromise()
          .then((response)=> {
            console.log(response);
            resolve(response);
          })
          .catch((error)=> {
            reject(error);
          });
    });

  }

}
