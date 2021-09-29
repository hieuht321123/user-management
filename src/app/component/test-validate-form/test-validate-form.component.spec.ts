import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValidateFormComponent } from './test-validate-form.component';

describe('TestValidateFormComponent', () => {
  let component: TestValidateFormComponent;
  let fixture: ComponentFixture<TestValidateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestValidateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
