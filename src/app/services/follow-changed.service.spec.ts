import { TestBed } from '@angular/core/testing';

import { FollowChangedService } from './follow-changed.service';

describe('FollowChangedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowChangedService = TestBed.get(FollowChangedService);
    expect(service).toBeTruthy();
  });
});
