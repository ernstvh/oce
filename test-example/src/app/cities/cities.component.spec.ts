import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesComponent } from './cities.component';
import { City } from '../model/city.model';

describe('CitiesComponent', () => {
  let component: CitiesComponent;
  let fixture: ComponentFixture<CitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesComponent);
    component = fixture.componentInstance;
    // mock data voor deze component
    component.cities = [
      new City(1, 'Venlo', 'LB'),
      new City(2, 'Groningen', 'GR')
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cities should have a length of 2', () => {
    expect(component.cities.length).toEqual(2);
  });

  it('should add a city', () => {
    component.addCity('Venlo');
    expect(component.cities.length).toEqual(3);
  });

  it('should delete a city', () => {
    component.deleteCity(component.cities[0]);
    expect(component.cities.length).toEqual(1);
  });
});
