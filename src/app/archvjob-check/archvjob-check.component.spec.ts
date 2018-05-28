import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchvjobCheckComponent } from './archvjob-check.component';

describe('ArchvjobCheckComponent', () => {
  let component: ArchvjobCheckComponent;
  let fixture: ComponentFixture<ArchvjobCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchvjobCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchvjobCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
