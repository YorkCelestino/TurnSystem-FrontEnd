import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTurnoComponent } from './department-turno.component';

describe('DepartmentTurnoComponent', () => {
  let component: DepartmentTurnoComponent;
  let fixture: ComponentFixture<DepartmentTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
