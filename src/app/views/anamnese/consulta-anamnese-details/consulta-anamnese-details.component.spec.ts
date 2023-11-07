import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAnamneseDetailsComponent } from './consulta-anamnese-details.component';

describe('ConsultaAnamneseDetailsComponent', () => {
  let component: ConsultaAnamneseDetailsComponent;
  let fixture: ComponentFixture<ConsultaAnamneseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaAnamneseDetailsComponent]
    });
    fixture = TestBed.createComponent(ConsultaAnamneseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
