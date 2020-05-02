import { TestBed } from '@angular/core/testing';

import { TvmazeApiService } from './tvmaze-api.service';

describe('TvmazeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvmazeApiService = TestBed.get(TvmazeApiService);
    expect(service).toBeTruthy();
  });
});
