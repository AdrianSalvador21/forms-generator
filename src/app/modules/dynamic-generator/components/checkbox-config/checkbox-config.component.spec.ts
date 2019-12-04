import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxConfigComponent } from './checkbox-config.component';

describe('CheckboxConfigComponent', () => {
  let component: CheckboxConfigComponent;
  let fixture: ComponentFixture<CheckboxConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
