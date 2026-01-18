import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HouseService, House } from '../house-service';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './houses.html',
  styleUrl: './houses.css'
})
export class HousesComponent implements OnInit {
  houses: House[] = [];
  filteredHouses: House[] = [];
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.houses = this.houseService.getHouses();
    this.filteredHouses = this.houses;
    this.cities = this.houseService.getUniqueCities();
  }

  onSearch() {
    this.filteredHouses = this.houseService.filterByCity(this.selectedCity);
  }

  resetFilter() {
    this.selectedCity = '';
    this.filteredHouses = this.houses;
  }
}
