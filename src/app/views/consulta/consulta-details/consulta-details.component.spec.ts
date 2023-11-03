import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDetailsComponent } from './consulta-details.component';

describe('ConsultaDetailsComponent', () => {
  let component: ConsultaDetailsComponent;
  let fixture: ComponentFixture<ConsultaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaDetailsComponent]
    });
    fixture = TestBed.createComponent(ConsultaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
