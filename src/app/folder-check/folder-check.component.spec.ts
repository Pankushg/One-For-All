import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCheckComponent } from './folder-check.component';

describe('FolderCheckComponent', () => {
  let component: FolderCheckComponent;
  let fixture: ComponentFixture<FolderCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
