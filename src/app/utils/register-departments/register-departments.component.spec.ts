import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDepartmentsComponent } from './register-departments.component';

describe('RegisterDepartmentsComponent', () => {
  let component: RegisterDepartmentsComponent;
  let fixture: ComponentFixture<RegisterDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
