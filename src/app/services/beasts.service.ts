import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }

  beasts = [
    {name: 'Cow', color: 'black-white', origine: 'Africa, Asia, Europe', img: 'https://media.gettyimages.com/photos/portrait-of-cow-on-green-idyllic-pasture-picture-id108227041?s=612x612'  },
    {name: 'Ox', color: 'black', origine: 'Alsace', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7EjdkMSJU2pJkutfx8KFLEuJzZZnvfUjRJDJ2-BJx3WFAJmtm'  },
    {name: 'Deer', color: 'mult-color', origine: 'All continents', img: 'https://france3-regions.francetvinfo.fr/centre-val-de-loire/sites/regions_france3/files/styles/top_big/public/assets/images/2019/02/08/074_1-4082199.jpg?itok=ehjBto5J'  }
  ]
  
  
    currentBeastIndex = 0;
    currentBeast = this.beasts[this.currentBeastIndex];

  
}
