// NG2
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// App
import { AboutComponent } from './about.component';

describe('Component: AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AboutComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should instantiate with it\'s defaults.', () => {
        expect(component).toBeTruthy();
        expect(component.links.length).toBe(3);
        // Enforce the order of links
        expect(component.links[0].order).toBeLessThan(component.links[1].order);
    });
});
