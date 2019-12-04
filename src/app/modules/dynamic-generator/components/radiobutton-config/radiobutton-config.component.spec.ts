import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonConfigComponent } from './radiobutton-config.component';

describe('RadiobuttonConfigComponent', () => {
  let component: RadiobuttonConfigComponent;
  let fixture: ComponentFixture<RadiobuttonConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobuttonConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
