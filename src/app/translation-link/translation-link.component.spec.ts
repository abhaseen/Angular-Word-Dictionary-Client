import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationLinkComponent } from './translation-link.component';

describe('TranslationLinkComponent', () => {
  let component: TranslationLinkComponent;
  let fixture: ComponentFixture<TranslationLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
