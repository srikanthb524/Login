import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmodetailsComponent } from './emodetails.component';

describe('EmodetailsComponent', () => {
  let component: EmodetailsComponent;
  let fixture: ComponentFixture<EmodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmodetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
