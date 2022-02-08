import { TestBed } from '@angular/core/testing';

import { BasicPrimitivesService } from './basic-primitives.service';

describe('BasicPrimitivesService', () => {
  let service: BasicPrimitivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPrimitivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
