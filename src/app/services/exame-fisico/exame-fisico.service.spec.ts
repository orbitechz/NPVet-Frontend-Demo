import { TestBed } from '@angular/core/testing';

import { ExameFisicoService } from './exame-fisico.service';

describe('ExameFisicoService', () => {
  let service: ExameFisicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExameFisicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
