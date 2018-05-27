import { TestBed, inject } from '@angular/core/testing';

import { FolderCheckService } from './folder-check.service';

describe('FolderCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderCheckService]
    });
  });

  it('should be created', inject([FolderCheckService], (service: FolderCheckService) => {
    expect(service).toBeTruthy();
  }));
});
