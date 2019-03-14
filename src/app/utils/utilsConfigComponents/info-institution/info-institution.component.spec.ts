import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInstitutionComponent } from './info-institution.component';

describe('InfoInstitutionComponent', () => {
  let component: InfoInstitutionComponent;
  let fixture: ComponentFixture<InfoInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
