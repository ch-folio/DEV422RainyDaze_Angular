import { Injectable } from '@angular/core';
import {Product} from '../../shared/models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return [
      {
      id: 1,
      name: 'Raincoat',
      price: 55,
      category: 'Coats',
      size: 'M',
      color: 'Black',
      imageUrl: '/assets/images/rainwear_photos/black_rain_coat.jpg'
      },
      {
        id: 2,
        name: 'Puffer Coat',
        price: 65,
        category: 'Coats',
        size: 'L',
        color: 'Black',
        imageUrl: '/assets/images/rainwear_photos/black_rain_coat_2.jpg'
        },
        {
          id: 3,
          name: 'Raincoat',
          price: 50,
          category: 'Coats',
          size: 'M',
          color: 'Blue',
          imageUrl: '/assets/images/rainwear_photos/blue_rain_coat.jpg'
          },
          {
            id: 4,
            name: 'Fur-Hooded Raincoat',
            price: 75,
            category: 'Coats',
            size: 'XL',
            color: 'Dark Blue',
            imageUrl: '/assets/images/rainwear_photos/blue_fur_rain_coat.jpg'
            },
            {
              id: 5,
              name: 'Faux Fur Coat',
              price: 80,
              category: 'Coats',
              size: 'XL',
              color: 'Light Brown',
              imageUrl: '/assets/images/rainwear_photos/brown_fur_rain_coat.jpg'
              },
              {
                id: 6,
                name: 'Classic Raincoat',
                price: 48,
                category: 'Coats',
                size: 'S',
                color: 'Yellow',
                imageUrl: '/assets/images/rainwear_photos/yellow_rain_coat.jpg'
                },
                {
                  id: 7,
                  name: 'Classic Hoodie',
                  price: 55,
                  category: 'Sweaters',
                  size: 'L',
                  color: 'Blue',
                  imageUrl: '/assets/images/rainwear_photos/blue_sweater.jpg'
                  },
                  {
                    id: 8,
                    name: 'Sweater',
                    price: 60,
                    category: 'Sweaters',
                    size: 'M',
                    color: 'Green',
                    imageUrl: '/assets/images/rainwear_photos/green_sweater.jpg'
                    },
                    {
                      id: 9,
                      name: 'Umbrella',
                      price: 35,
                      category: 'Accessories',
                      size: 'One Size',
                      color: 'Black',
                      imageUrl: '/assets/images/rainwear_photos/black_umbrella.jpg'
                      },
                      {
                        id: 10,
                        name: 'Umbrella',
                        price: 30,
                        category: 'Accessories',
                        size: 'One Size',
                        color: 'Blue',
                        imageUrl: '/assets/images/rainwear_photos/blue_umbrella.jpg'
                        },
                        {
                          id: 11,
                          name: 'Umbrella Set',
                          price: 55,
                          category: 'Accessories',
                          size: 'One Size',
                          color: 'Multi',
                          imageUrl: '/assets/images/rainwear_photos/umbrella_set.jpg'
                          }
    ]
  }
}







