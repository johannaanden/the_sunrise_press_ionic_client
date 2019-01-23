import { HomePage } from "./home";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("HomePage", () => {
    let homepage, fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomePage
            ],
            imports: [IonicModule.forRoot(HomePage)],
            providers: [
                { provide: Platform, useFactory: () => PlatformMock.instance() },
                { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
                { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
                { provide: NavController, useFactory: () => NavControllerMock.instance() }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        homepage = fixture.componentInstance;
    });

    it('should create the home page', () => {
        expect(homepage).toBeTruthy();
        expect(homepage instanceof HomePage).toEqual(true);
    });

    it('should have a articles', () => {
        expect(homepage.article).toEqual({ title: 'newsy', 
            description: 'this is a description', 
            image: '.src/assets/imgs/donut.png'});
    });

    it('should have read function', () => {
        spyOn(homepage, 'read');
        homepage.read()
        expect(homepage.read).toHaveBeenCalled();
    });

});