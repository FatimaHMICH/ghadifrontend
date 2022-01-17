import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];
    
    if (localStorage.getItem('type') == 'client') {
    let cat1: ICategory = {
      id: 1,
      name: 'Cars',
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

    categories.push(cat1, cat2, cat3);
  } else {
    let cat1: ICategory = {
      id: 1,
      name: 'Very lit',
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

    categories.push(cat1, cat2, cat3);
  }
    return categories;


}

  getFeaturedProducts() {
    let products = [];
    if (localStorage.getItem('type') == 'client') {
    let prod1: IProduct = {
      id: 1,
      name: 'Peugeot 208',
      price: 55,
      image: '../../assets/photos/voiture1.jfif'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Spirit',
      price: 34,
      image: '../../assets/photos/moto1.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Honda',
      price: 40,
      image: '../../assets/photos/camion2.jpg'
    }

    products.push(prod1, prod2, prod3);
  }else {
    let prod1: IProduct = {
      id: 1,
      name: 'Carton',
      price: 55,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Valise',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Sac',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);

  }

    return products;
  }

  getBestSellProducts() {
    let products = [];
    if (localStorage.getItem('type') == 'client') {
    let prod1: IProduct = {
      id: 1,
      name: 'Zayneb',
      price: 55,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Anass',
      price: 34,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Fatyma',
      price: 40,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);
  } else {
    let prod1: IProduct = {
      id: 1,
      name: 'Samii',
      price: 55,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Chibani',
      price: 34,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Hmich',
      price: 40,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);
  }

    return products;
  }
}
