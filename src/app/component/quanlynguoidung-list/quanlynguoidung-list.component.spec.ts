import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoidungListComponent } from './quanlynguoidung-list.component';

describe('QuanlynguoidungListComponent', () => {
  let component: QuanlynguoidungListComponent;
  let fixture: ComponentFixture<QuanlynguoidungListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlynguoidungListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoidungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
