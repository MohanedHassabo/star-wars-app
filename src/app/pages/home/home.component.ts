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
    questionThree: "";

    //Answers Variables
    answerThree: [];

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
        let task3 = this.movieService.getMoviesInfo('GetSpeciesApearedInMostFilms');

        //Combine all requests and get combined results at the same time - assign the returned results into a variables
        forkJoin([task3])
        //.map((res: Response) => res.json().response.map((data: Movie) => new Movie().deserialize(data)))
            .subscribe(([res3]) => {
                var me = this;
                //Get all results for each task/question and assign them to variables
                me.questionThree = res3['question'];
                me.answerThree = res3['answer'];
            }, (error) => {
                console.log('Error found!');
            }, () => {
                console.log('Request Complete!');
            });

    }
}