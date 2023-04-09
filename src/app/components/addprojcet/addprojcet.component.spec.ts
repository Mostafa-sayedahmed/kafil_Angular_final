import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojcetComponent } from './addprojcet.component';

describe('AddprojcetComponent', () => {
  let component: AddprojcetComponent;
  let fixture: ComponentFixture<AddprojcetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojcetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprojcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
