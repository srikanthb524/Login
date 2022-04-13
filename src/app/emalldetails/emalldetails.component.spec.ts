import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmalldetailsComponent } from './emalldetails.component';

describe('EmalldetailsComponent', () => {
  let component: EmalldetailsComponent;
  let fixture: ComponentFixture<EmalldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmalldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
