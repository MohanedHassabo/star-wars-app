import {InjectionToken} from '@angular/core';
import { environment } from 'src/environments/environment';

export let AppConfig = new InjectionToken('app.config');

//Global Constants Configuration
export const APP_CONFIG : any = {
  appName: 'Star Wars App',
  repositoryURL: 'https://github.com/MohanedHassabo/star-wars-app'
};
export let API_ENDPOINT =  environment.apiUrl; // + '/';

export const API_URL = {
    urlUser: API_ENDPOINT+ 'action/Users.php',
    urlMovies: API_ENDPOINT+ 'action/Movies.php'
};
