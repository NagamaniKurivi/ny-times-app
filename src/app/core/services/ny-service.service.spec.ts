import { TestBed, inject } from '@angular/core/testing';

import { NyServiceService } from './ny-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NyServiceService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([NyServiceService], (service: NyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
