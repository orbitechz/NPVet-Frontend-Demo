import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamneseEditComponent } from './anamnese-edit.component';

describe('AnamneseEditComponent', () => {
  let component: AnamneseEditComponent;
  let fixture: ComponentFixture<AnamneseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnamneseEditComponent]
    });
    fixture = TestBed.createComponent(AnamneseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
