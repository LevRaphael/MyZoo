import { BeastsService } from './services/beasts.service';
import { BirdsService } from './services/birds.service';
import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { WildsService } from './services/wilds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public paging:PagingService, public birds:BirdsService, public beasts : BeastsService , public wilds:WildsService){}
  title = 'zooAvratech';


  getUp(event){
    switch (this.paging.currentPanel) {
      case 'birds':
          let newBirdIndex = this.getNewCuurentIndex(
          this.birds.currentBirdIndex, event, this.birds.birds)
          this.birds.currentBirdIndex = newBirdIndex
          this.birds.currentBird = this.birds.birds[newBirdIndex]
        break;
      case 'beasts':
        let newBeastIndex = this.getNewCuurentIndex(
          this.beasts.currentBeastIndex, event, this.beasts.beasts)
          this.beasts.currentBeastIndex = newBeastIndex
          this.beasts.currentBeast = this.beasts.beasts[newBeastIndex]
          break;
      case 'wilds':
          let newWildIndex = this.getNewCuurentIndex(
          this.wilds.currentwildIndex, event, this.beasts.beasts)
          this.wilds.currentwildIndex = newWildIndex
          this.wilds.currentwild = this.wilds.wilds[newWildIndex]
          default:
          break;
          
   }
  }
   getNewCuurentIndex(current:number, delta:number, array:{}[]):number{
    let max = array.length -1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }    
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }
    
}


