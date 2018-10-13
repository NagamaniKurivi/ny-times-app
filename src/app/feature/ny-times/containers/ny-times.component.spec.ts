import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyTimesComponent } from './ny-times.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NyTimesComponent', () => {
  let component: NyTimesComponent;
  let fixture: ComponentFixture<NyTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyTimesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
