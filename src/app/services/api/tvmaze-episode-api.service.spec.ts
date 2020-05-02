import { TestBed } from '@angular/core/testing';

import { TvmazeEpisodeApiService } from './tvmaze-episode-api.service';

describe('TvmazeEpisodeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvmazeEpisodeApiService = TestBed.get(TvmazeEpisodeApiService);
    expect(service).toBeTruthy();
  });
});
