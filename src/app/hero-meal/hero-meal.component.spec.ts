import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMealComponent } from './hero-meal.component';

describe('HeroMealComponent', () => {
  let component: HeroMealComponent;
  let fixture: ComponentFixture<HeroMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
