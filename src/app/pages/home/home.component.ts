import { Component, OnInit, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG} from '../../configs/app.config';
import { Answer, MovieService} from '../../services/movie.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = APP_CONFIG.appName;
    isDisplayed = false;
    // Questions Variables
    questionOne: string;
    questionTwo: string;
    questionThree: string;
    questionFour: string;
    // Answers Variables
    answerOne: Answer[];
    answerTwo: Answer[];
    answerThree: Answer[];
    answerFour: Answer[];
    // isLoadingResults = true;
    constructor(@Inject(AppConfig) public appConfig: any,
                private movieService: MovieService
    ) {}
    ngOnInit() {}

    public onButtonClick() {
        this.isDisplayed = ! this.isDisplayed;
        if (this.isDisplayed) {
            // When button clicked show all questions and answers from our API
            this.showAllTasks();
        }
    }
    showAllTasks() {
        const me = this;
        // Get all requests results at the same time and assign them variables.
        me.movieService.getAllTasks()
            .subscribe(([res1, res2, res3, res4]) => {
                // Get all questions and assign them variables
                me.questionOne = res1.question;
                me.questionTwo = res2.question;
                me.questionThree = res3.question;
                me.questionFour = res4.question;
                // Get all answers for each question and assign them variables
                me.answerOne = res1.answer;
                me.answerTwo = res2.answer;
                me.answerThree = res3.answer;
                me.answerFour = res4.answer;
                // me.isLoadingResults = false;
            }, (error) => {
                console.log('Error found!');
                console.log(error);
                // me.isLoadingResults = false;
            }, () => {
                console.log('Request Complete!');
                // me.isLoadingResults = false;
            });
    }
}
