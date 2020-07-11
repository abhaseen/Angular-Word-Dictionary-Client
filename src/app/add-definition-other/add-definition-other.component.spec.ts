import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefinitionOtherComponent } from './add-definition-other.component';

describe('AddDefinitionOtherComponent', () => {
  let component: AddDefinitionOtherComponent;
  let fixture: ComponentFixture<AddDefinitionOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDefinitionOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDefinitionOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
