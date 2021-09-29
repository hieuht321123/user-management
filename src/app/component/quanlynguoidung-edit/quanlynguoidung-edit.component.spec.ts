import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoidungEditComponent } from './quanlynguoidung-edit.component';

describe('QuanlynguoidungEditComponent', () => {
  let component: QuanlynguoidungEditComponent;
  let fixture: ComponentFixture<QuanlynguoidungEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlynguoidungEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoidungEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
