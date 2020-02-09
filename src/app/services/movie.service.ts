import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { API_URL} from '../configs/app.config';
import { JsonResult, Result, DataAdapter} from '../shared/models/movie.model';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export class Answer extends Result {}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient, private dataAdapter: DataAdapter) {}

    // Http request call general function for all tasks need to be called to consumes our api.
    getMoviesInfo(task: string) {
        const options = {
            withCredentials: true,
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
            params: new HttpParams().append('task', task)
        };
        return this.http.get(API_URL.urlMovies, options);
    }

    // Combine all requests to get combined results at the same time for each question.
    getAllTasks(): Observable<JsonResult[]> {
        const me = this;
        return forkJoin(
            me.getMoviesInfo('GetLongestOpeningCrawlMovie'),
            me.getMoviesInfo('GetPersonAppearedInMostFilms'),
            me.getMoviesInfo('GetSpeciesApearedInMostFilms'),
            me.getMoviesInfo('GetPlanetWithMoreVehiclePilots')
        ).pipe(
            map((data: any[]) => data.map(item => this.dataAdapter.adapt(item)))
        );
    }
}
