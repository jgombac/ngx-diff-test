import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTestComponent } from './action-test.component';

describe('ActionTestComponent', () => {
  let component: ActionTestComponent;
  let fixture: ComponentFixture<ActionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
