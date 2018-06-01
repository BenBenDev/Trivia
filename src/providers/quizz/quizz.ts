import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../models/question';
import { resultatQuizz } from '../../models/resultat-quizz';

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

    return new Promise<resultatQuizz> ((resolve, reject) => {
      console.log('REQUEST = https://opentdb.com/api.php?amount=10&difficulty=medium');
        // this.http.get('http://www.omdbapi.com/?apikey=1898fc97&s=world')
        this.http.get('https://opentdb.com/api.php?amount='+nbQuest+'&difficulty='+level)
          .toPromise()
          .then((response)=> {
            console.log(response);
            resolve(response);
            // if (response ) {
            //   resolve(response);
            // } else {
            //   reject("ERROR Open Trivia API");
            // }
          })
          .catch((error)=> {
            reject(error);
          });
    });



    //
    // console.log('movies asked');
    // return [{
    //   Title: "Star Wars",
    //   Year: 1977,
    //   Poster: "https://www.avoir-alire.com/IMG/arton8469.jpg"
    // }];
  }

}

/*
 {response_code: 0, results: Array(10)}
 response_code
 :
 0
 results
 :
 Array(10)
 0
 :
 category
 :
 "Animals"
 correct_answer
 :
 "False"
 difficulty
 :
 "medium"
 incorrect_answers
 :
 ["True"]
 question
 :
 "The Ceratosaurus, a dinosaur known for having a horn on the top of its nose, is also known to be a decendent of the Tyrannosaurus Rex."
 type
 :
 "boolean"
 __proto__
 :
 Object
 1
 :
 category
 :
 "History"
 correct_answer
 :
 "Battle of Adrianople"
 difficulty
 :
 "medium"
 incorrect_answers
 :
 (3) ["Battle of Thessalonica", "Battle of Pollentia", "Battle of Constantinople"]
 question
 :
 "Which of the following battles is often considered as marking the beginning of the fall of the Western Roman Empire?"
 type
 :
 "multiple"
 __proto__
 :
 Object
 2
 :
 {category: "Geography", type: "multiple", difficulty: "medium", question: "Which of the following countries does NOT recognize Armenia as an independent country?", correct_answer: "Pakistan", …}
 3
 :
 {category: "Entertainment: Music", type: "multiple", difficulty: "medium", question: "What animal is featured on the cover of English el…gy&#039;s album, &quot;The Fat of the Land&quot;?", correct_answer: "Crab", …}
 4
 :

 */