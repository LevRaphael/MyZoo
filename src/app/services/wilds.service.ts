import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildsService {

  constructor() { }

  
wilds=[
  {name: 'Lion', color: 'yellow', origine: 'Africa, Asia, Europe', img: 'http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg'  },
  {name: 'leopard', color: 'mult-color', origine: 'All continents', img: 'https://www.naturalworldsafaris.com/media/3008/nws-st-india-leopard.jpg'  },
  {name: 'Jaguar', color: 'mult-color', origine: 'All continents', img: 'https://images.immediate.co.uk/production/volatile/sites/23/2014/07/GettyImages-506345448-a8b8e7c.jpg?quality=45&crop=334px,99px,2620px,1745px&resize=620,413'  }
 ]


  currentwildIndex = 0;
  currentwild = this.wilds[this.currentwildIndex];

}
