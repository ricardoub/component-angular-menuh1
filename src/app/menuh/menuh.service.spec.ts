import { TestBed, inject } from '@angular/core/testing';

import { MenuhService } from './menuh.service';

describe('MenuhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuhService]
    });
  });

  it('should be created', inject([MenuhService], (service: MenuhService) => {
    expect(service).toBeTruthy();
  }));
});
