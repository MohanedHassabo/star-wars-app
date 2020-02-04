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

    }
}