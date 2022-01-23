import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public categories = [];

  getDriverCategories() {
    
    let cat1: ICategory = {
      id: 1,
      name: 'Car',
      image: '../../assets/categories/voiture2.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Motorbike',
      image: '../../assets/categories/moto1.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Truck',
      image: '../../assets/categories/honda2.jpg'
    }

    this.categories.push(cat1, cat2, cat3);

    return this.categories;

  }

  getClientCategories() {
  
    let cat1: ICategory = {
      id: 1,
      name: 'Very lite',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Medium',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Heavy',
      image: '../../assets/categories/category-3.png'
    }

    this.categories.push(cat1, cat2, cat3);

    return this.categories;
  }
    
}
