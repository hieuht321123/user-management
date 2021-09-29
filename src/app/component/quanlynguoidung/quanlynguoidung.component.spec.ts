import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoidungComponent } from './quanlynguoidung.component';

describe('QuanlynguoidungComponent', () => {
  let component: QuanlynguoidungComponent;
  let fixture: ComponentFixture<QuanlynguoidungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlynguoidungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
