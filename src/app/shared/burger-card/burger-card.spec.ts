import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCardComponent } from './burger-card';

describe('BurgerCardComponent', () => {
  let component: BurgerCardComponent;
  let fixture: ComponentFixture<BurgerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
