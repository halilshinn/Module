import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupshomeComponent } from './popupshome.component';

describe('PopupshomeComponent', () => {
  let component: PopupshomeComponent;
  let fixture: ComponentFixture<PopupshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
