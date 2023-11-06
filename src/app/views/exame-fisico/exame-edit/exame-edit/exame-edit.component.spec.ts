import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameEditComponent } from './exame-edit.component';

describe('ExameEditComponent', () => {
  let component: ExameEditComponent;
  let fixture: ComponentFixture<ExameEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExameEditComponent]
    });
    fixture = TestBed.createComponent(ExameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
