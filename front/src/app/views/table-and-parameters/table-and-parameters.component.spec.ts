import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAndParametersComponent } from './table-and-parameters.component';

describe('TableAndParametersComponent', () => {
  let component: TableAndParametersComponent;
  let fixture: ComponentFixture<TableAndParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAndParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAndParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
