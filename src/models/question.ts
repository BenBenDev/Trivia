export class Question {

    public Category: string;
    public Correct_answer: string;
    public Difficulty: string;
    public Incorrect_answers: string[];
    public Question: string;
    public Type: string;


    public constructor(Category: string, Correct_answer: string, Difficulty: string,
                       Incorrect_answers: string[], Question: string, Type: string) {
        // this.Id = Id;
        // this.Title = Title;
        this.Category = Category;
        this. Correct_answer = Correct_answer;
        this.Difficulty = Difficulty;
        this.Incorrect_answers = Incorrect_answers;
        this.Question = Question;
        this.Type = Type;

    }
}