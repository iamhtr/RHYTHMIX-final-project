import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdCompletePageComponent } from './ord-complete-page.component';

describe('OrdCompletePageComponent', () => {
  let component: OrdCompletePageComponent;
  let fixture: ComponentFixture<OrdCompletePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdCompletePageComponent]
    });
    fixture = TestBed.createComponent(OrdCompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
