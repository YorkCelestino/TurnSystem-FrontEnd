import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMotivosComponent } from './register-motivos.component';

describe('RegisterMotivosComponent', () => {
  let component: RegisterMotivosComponent;
  let fixture: ComponentFixture<RegisterMotivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMotivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMotivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
