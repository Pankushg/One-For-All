import { TestBed, inject } from '@angular/core/testing';

import { ArchvService } from './archv.service';

describe('ArchvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchvService]
    });
  });

  it('should be created', inject([ArchvService], (service: ArchvService) => {
    expect(service).toBeTruthy();
  }));
});
