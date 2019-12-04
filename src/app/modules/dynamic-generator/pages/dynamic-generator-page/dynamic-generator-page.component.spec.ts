import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGeneratorPageComponent } from './dynamic-generator-page.component';

describe('DynamicGeneratorPageComponent', () => {
  let component: DynamicGeneratorPageComponent;
  let fixture: ComponentFixture<DynamicGeneratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGeneratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
