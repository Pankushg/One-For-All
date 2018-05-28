import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbjobCheckComponent } from './dbjob-check.component';

describe('DbjobCheckComponent', () => {
  let component: DbjobCheckComponent;
  let fixture: ComponentFixture<DbjobCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbjobCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbjobCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
