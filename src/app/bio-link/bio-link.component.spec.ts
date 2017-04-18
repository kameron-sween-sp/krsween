import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioLinkComponent } from './bio-link.component';

describe('BioLinkComponent', () => {
  let component: BioLinkComponent;
  let fixture: ComponentFixture<BioLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
