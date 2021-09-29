import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoidungDetailComponent } from './quanlynguoidung-detail.component';

describe('QuanlynguoidungDetailComponent', () => {
  let component: QuanlynguoidungDetailComponent;
  let fixture: ComponentFixture<QuanlynguoidungDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlynguoidungDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoidungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
