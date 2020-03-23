import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCriarComponent } from './empresa-criar.component';

describe('EmpresaCriarComponent', () => {
  let component: EmpresaCriarComponent;
  let fixture: ComponentFixture<EmpresaCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
