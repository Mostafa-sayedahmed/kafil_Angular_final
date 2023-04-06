import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPortfoloisComponent } from './details-portfolois.component';

describe('DetailsPortfoloisComponent', () => {
  let component: DetailsPortfoloisComponent;
  let fixture: ComponentFixture<DetailsPortfoloisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPortfoloisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPortfoloisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
