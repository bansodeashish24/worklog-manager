import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogTableComponent } from './worklog-table.component';

describe('WorklogTableComponent', () => {
  let component: WorklogTableComponent;
  let fixture: ComponentFixture<WorklogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
