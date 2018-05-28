import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrbatchMonitorComponent } from './errbatch-monitor.component';

describe('ErrbatchMonitorComponent', () => {
  let component: ErrbatchMonitorComponent;
  let fixture: ComponentFixture<ErrbatchMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrbatchMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrbatchMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
