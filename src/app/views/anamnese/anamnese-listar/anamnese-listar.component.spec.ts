import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamneseListarComponent } from './anamnese-listar.component';

describe('AnamneseListarComponent', () => {
  let component: AnamneseListarComponent;
  let fixture: ComponentFixture<AnamneseListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnamneseListarComponent]
    });
    fixture = TestBed.createComponent(AnamneseListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
