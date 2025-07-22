import { TestBed } from '@angular/core/testing';

import { ProoductStatic } from './prooduct-static';

describe('ProoductStatic', () => {
  let service: ProoductStatic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProoductStatic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
