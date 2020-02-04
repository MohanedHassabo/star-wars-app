import { Component, OnInit, Inject } from '@angular/core';
import {AppConfig, APP_CONFIG} from '../../configs/app.config';
import {Movie, MovieService} from "../../services/movie.service";
import { forkJoin} from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = APP_CONFIG.appName;
    movie: Movie;
    //answers: Movie[];

    isDisplayed = false;

    //Questions Variables
    questionOne: "";
    questionTwo: "";
    questionThree: "";
    questionFour: "";

    //Answers Variables
    answerOne: [];
    answerTwo: [];
    answerThree: [];
    answerFour: [];

    constructor(@Inject(AppConfig) public appConfig: any,
                private movieService: MovieService
    ) {}
    ngOnInit() {}

    public onButtonClick() {
        this.isDisplayed = !this.isDisplayed;
        if(this.isDisplayed){
            //When button clicked show all questions and answers from our API
            this.showAllTasks();
        }
    }
    showAllTasks() {
        //get request call for each task from `movieService` and assign result to a variable
        let task1 = this.movieService.getMoviesInfo('GetLongestOpeningCrawlMovie');
        let task2 = this.movieService.getMoviesInfo('GetPersonAppearedInMostFilms');
        let task3 = this.movieService.getMoviesInfo('GetSpeciesApearedInMostFilms');
        let task4 = this.movieService.getMoviesInfo('GetPlanetWithMoreVehiclePilots');

        /*this.movieService.getMovies('GetLongestOpeningCrawlMovie').subscribe(answers => this.answers = answers);
        console.log(this.answers);*/

        //Combine all requests and get combined results at the same time - assign the returned results into a variables
        forkJoin([task1, task2, task3, task4])
            //.map((res: Response) => res.json().response.map((data: Movie) => new Movie().deserialize(data)))
            .subscribe(([res1, res2, res3, res4]) => {
                var me = this;
                //Get all results for each task/question and assign them to variables
                me.questionOne= res1['question'];
                me.questionTwo = res2['question'];
                me.questionThree = res3['question'];
                me.questionFour = res4['question'];

                me.answerOne= res1['answer'];
                me.answerTwo = res2['answer'];
                me.answerThree = res3['answer'];
                me.answerFour = res4['answer'];
            }, (error) => {
                console.log('Error found!');
            }, () => {
                console.log('Request Complete!');
            });

    }
}