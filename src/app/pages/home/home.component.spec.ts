import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { AboutComponent} from '../about/about.component';
import { PageNotFoundComponent} from '../page-not-found/page-not-found.component';

// import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG} from '../../configs/app.config';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    // let router: Router;

    /* let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;*/

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, AboutComponent, PageNotFoundComponent
            ],
            imports: [
                // RouterTestingModule
                RouterTestingModule.withRoutes([
                    {path: 'home', component: HomeComponent},
                    {path: 'about', component: AboutComponent},
                    {path: '', redirectTo: '/home', pathMatch: 'full'},
                    {path: '**', component: PageNotFoundComponent}
                ]), HttpClientModule
            ],
            providers: [{provide: AppConfig, useValue: APP_CONFIG}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    /*it('should create the app', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });*/

    /*it('should render title', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.star-inner-button').textContent).toContain('Star Wars App app is running!');
    });*/

    it('should click the button', async(() => {
        /*spyOn(component, 'onButtonClick');
        let button = fixture.debugElement.nativeElement.querySelector('.star-inner-button');
        button.click();

        fixture.whenStable().then(() => {
            expect(component.onButtonClick).toHaveBeenCalled();
        });*/

        /*fixture.detectChanges();
        spyOn(component, 'onButtonClick'); //method attached to the click.
        let btn = fixture.debugElement.query(By.css('button'));
        btn.triggerEventHandler('click', null);
        tick(); // simulates the passage of time until all pending asynchronous activities finish
        fixture.detectChanges();
        expect(component.onButtonClick).toHaveBeenCalled();*/

       /* let mock = spyOn(component, 'onButtonClick');
        let submitButton: DebugElement = fixture.debugElement.query(By.css('star-wars-button'));
        fixture.detectChanges();
        submitButton.triggerEventHandler('click',null); fixture.detectChanges();
        expect(mock).toHaveBeenCalledTimes(1);*/

        /*spyOn(component.change, 'onButtonClick');
        component.onClick();
        expect(component.change.emit).toHaveBeenCalledWith(1);*/
    }));

});
