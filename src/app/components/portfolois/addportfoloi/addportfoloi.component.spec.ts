import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddportfoloiComponent } from './addportfoloi.component';

describe('AddportfoloiComponent', () => {
  let component: AddportfoloiComponent;
  let fixture: ComponentFixture<AddportfoloiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddportfoloiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddportfoloiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
