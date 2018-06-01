export class Question {

    public Category: string;
    public Correct_answer: string;
    public Difficulty: string;
    public Incorrect_answers: string[];
    public Question: string;
    public Type: string;
    public Answers: string[];


    public constructor(category: string, correct_answer: string, difficulty: string,
                       incorrect_answers: string[], question: string, type: string, answers: string[]) {
        // this.Id = Id;
        // this.Title = Title;
        this.Category = category;
        this.Correct_answer = correct_answer;
        this.Difficulty = difficulty;
        this.Incorrect_answers = incorrect_answers;
        this.Question = question;
        this.Type = type;
        this.Answers = this.Incorrect_answers.concat(this.Correct_answer);

    }
}