import { TestBed } from '@angular/core/testing';

import { TvmazeShowApiService } from './tvmaze-show-api.service';

describe('TvmazeShowApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvmazeShowApiService = TestBed.get(TvmazeShowApiService);
    expect(service).toBeTruthy();
  });
});
