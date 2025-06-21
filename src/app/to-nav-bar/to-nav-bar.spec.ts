import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToNavBar } from './to-nav-bar';

describe('ToNavBar', () => {
  let component: ToNavBar;
  let fixture: ComponentFixture<ToNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
