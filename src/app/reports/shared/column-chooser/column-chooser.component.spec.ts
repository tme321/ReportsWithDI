import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChooserComponent } from './column-chooser.component';

describe('ColumnChooserComponent', () => {
  let component: ColumnChooserComponent;
  let fixture: ComponentFixture<ColumnChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
