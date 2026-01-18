import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface House {
  id: number;
  name: string;
  city: string;
  image: string;
  learnMoreUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses: House[] = [
    {
      id: 1,
      name: 'Modern Villa',
      city: 'New York',
      image: 'https://luxury-houses.net/wp-content/uploads/2020/12/Stunning-New-Modern-House-in-New-York-hits-Market-for-12500000-1.jpg',
      learnMoreUrl: '#villa-1'
    },
    {
      id: 2,
      name: 'Cozy Cottage',
      city: 'Los Angeles',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJuHMOk9s8NS6wE57hqHZ5upv_esVVQIVxw&s',
      learnMoreUrl: '#cottage-1'
    },
    {
      id: 3,
      name: 'Luxury Penthouse',
      city: 'New York',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop',
      learnMoreUrl: '#penthouse-1'
    },
    {
      id: 4,
      name: 'Beach House',
      city: 'Miami',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
      learnMoreUrl: '#beach-1'
    },
    {
      id: 5,
      name: 'Downtown Apartment',
      city: 'Los Angeles',
      image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_737,h_414/q_auto,f_auto/4013-35/artisan-on-2nd-apartments-exterior',
      learnMoreUrl: '#apartment-1'
    },
    {
      id: 6,
      name: 'Suburban Home',
      city: 'Chicago',
      image: 'https://images.squarespace-cdn.com/content/v1/54c145e5e4b0040a8009b706/1633644712156-LHW1S8XP9HAS02P2G0OP/Geneva%2BHome%2B77.jpg',
      learnMoreUrl: '#home-1'
    }
  ];

  housesList = signal<House[]>(this.houses);

  getHouses() {
    return this.houses;
  }

  getUniqueCities() {
    return [...new Set(this.houses.map(h => h.city))].sort();
  }

  filterByCity(city: string): House[] {
    if (!city || city === '') {
      return this.houses;
    }
    return this.houses.filter(h => h.city === city);
  }
}
