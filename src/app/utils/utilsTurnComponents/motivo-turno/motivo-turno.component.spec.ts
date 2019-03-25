import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoTurnoComponent } from './motivo-turno.component';

describe('MotivoTurnoComponent', () => {
  let component: MotivoTurnoComponent;
  let fixture: ComponentFixture<MotivoTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
