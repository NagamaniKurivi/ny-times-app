import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponent } from './articles-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NyServiceService } from '../../../../core/services/ny-service.service';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [NyServiceService, HttpClient, HttpHandler, ActivatedRoute],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
