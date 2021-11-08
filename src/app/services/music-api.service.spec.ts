import { TestBed } from '@angular/core/testing';

import { MusicApiService } from './music-api.service';

describe('MusicApiService', () => {
  let service: MusicApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
