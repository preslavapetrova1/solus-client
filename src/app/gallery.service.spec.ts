import { TestBed } from '@angular/core/testing';

import { Project1Service } from './project1.service';

describe('Project1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Project1Service = TestBed.get(Project1Service);
    expect(service).toBeTruthy();
  });
});
