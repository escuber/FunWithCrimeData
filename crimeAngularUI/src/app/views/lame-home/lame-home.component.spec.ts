import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LameHomeComponent } from './lame-home.component';

describe('LameHomeComponent', () => {
  let component: LameHomeComponent;
  let fixture: ComponentFixture<LameHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LameHomeComponent]
    });
    fixture = TestBed.createComponent(LameHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
