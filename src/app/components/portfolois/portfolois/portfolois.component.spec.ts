import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoloisComponent } from './portfolois.component';

describe('PortfoloisComponent', () => {
  let component: PortfoloisComponent;
  let fixture: ComponentFixture<PortfoloisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoloisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoloisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
