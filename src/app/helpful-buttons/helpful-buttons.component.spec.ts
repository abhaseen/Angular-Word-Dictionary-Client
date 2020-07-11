import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulButtonsComponent } from './helpful-buttons.component';

describe('HelpfulButtonsComponent', () => {
  let component: HelpfulButtonsComponent;
  let fixture: ComponentFixture<HelpfulButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfulButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
