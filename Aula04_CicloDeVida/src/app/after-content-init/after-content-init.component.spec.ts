import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitComponent } from './after-content-init.component';

describe('AfterContentInitComponent', () => {
  let component: AfterContentInitComponent;
  let fixture: ComponentFixture<AfterContentInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterContentInitComponent]
    });
    fixture = TestBed.createComponent(AfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
