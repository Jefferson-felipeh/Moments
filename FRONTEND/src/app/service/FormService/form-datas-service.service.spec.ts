import { TestBed } from '@angular/core/testing';

import { FormDatasServiceService} from './form-datas-service.service';

describe('FormDatasServiceService', () => {
  let service: FormDatasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDatasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


//viewChild