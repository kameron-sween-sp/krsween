// NG2
import { TestBed, async } from '@angular/core/testing';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';
// APP
import { AppComponent } from './app.component';

describe('Component: AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                RouterLinkStubDirective,
                RouterOutletStubComponent
            ],
        });
        TestBed.compileComponents();
    }));

    it('should instantiate the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    describe('View: ', () => {
        it('should render title in a h1 tag', async(() => {
            let fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('@krsween');
        }));
    });
});
