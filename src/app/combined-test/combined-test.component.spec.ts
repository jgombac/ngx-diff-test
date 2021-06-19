import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedTestComponent } from './combined-test.component';

describe('CombinedTestComponent', () => {
  let component: CombinedTestComponent;
  let fixture: ComponentFixture<CombinedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
