import { TestBed, inject } from '@angular/core/testing';

import { UserServiceLogin } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceLogin]
    });
  });

  it('should be created', inject([UserServiceLogin], (service: UserServiceLogin) => {
    expect(service).toBeTruthy();
  }));
});
