import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleModalComponent } from './toggle-modal.component';

describe('ToggleModalComponent', () => {
  let component: ToggleModalComponent;
  let fixture: ComponentFixture<ToggleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleModalComponent]
    });
    fixture = TestBed.createComponent(ToggleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
