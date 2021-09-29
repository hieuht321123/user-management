import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoidungAddComponent } from './quanlynguoidung-add.component';

describe('QuanlynguoidungAddComponent', () => {
  let component: QuanlynguoidungAddComponent;
  let fixture: ComponentFixture<QuanlynguoidungAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlynguoidungAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoidungAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
