import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  constructor() {} 

birds=[
  {name: 'pink flamingo', color: 'pink', origine: 'Africa, Asia, Europe', img: 'https://previews.123rf.com/images/schan/schan1706/schan170602049/80873865-flamant-rose-sur-un-%C3%A9tang-dans-la-nature-.jpg'  },
  {name: 'stork', color: 'with', origine: 'Alsace', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ciconia_ciconia_01.JPG/220px-Ciconia_ciconia_01.JPG'  },
  {name: 'peacock', color: 'mult-color', origine: 'All continents', img: 'http://ekladata.com/E_2J_4KQ305Oa0dtNEukGu5ByoM.jpg'  },
  {name: 'long-tail', color: 'mult-color', origine: 'Africa, Asia, Europe', img: 'https://media.mnn.com/assets/images/2015/08/long-tailed-widowbird.jpg.653x0_q80_crop-smart.jpg'  },]


  currentBirdIndex = 0;
  currentBird = this.birds[this.currentBirdIndex];

}