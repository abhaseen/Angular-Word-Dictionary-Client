import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOtherComponent } from './detail-other.component';

describe('DetailOtherComponent', () => {
  let component: DetailOtherComponent;
  let fixture: ComponentFixture<DetailOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
