import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeWorkersComponent } from './change-workers.component';

describe('ChangeWorkersComponent', () => {
  let component: ChangeWorkersComponent;
  let fixture: ComponentFixture<ChangeWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
