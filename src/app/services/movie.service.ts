import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { API_URL} from '../configs/app.config';
import {Deserializable} from "../shared/models/deserializable.model";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

//Create Movie Data Model
export class Movie implements Deserializable {
    id: number;
    name: string;
    no_of_characters: number;
    //no_of_film: number;
    no_of_pilots: number;
    pilots: string;
    total: number;
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
    headers: any;
    response = [];
    constructor(private http: HttpClient) {}

    //Http request call general function for all tasks need to be called in api
    getMoviesInfo(task: string) {
        const options = {
              withCredentials: true,
              headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
              params: new HttpParams().append('task', task)
        };
        return this.http.get(API_URL.urlMovies, options);
    }
}
