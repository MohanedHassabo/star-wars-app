import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig, APP_CONFIG} from './configs/app.config';
//import { UserService } from './services/user.service';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule //Included http Module with imports array
  ],
  providers: [{provide: AppConfig, useValue: APP_CONFIG}], //, UserService
  bootstrap: [AppComponent]
})
export class AppModule { }
