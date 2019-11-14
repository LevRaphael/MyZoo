import { BeastsService } from './../../../services/beasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beasts',
  templateUrl: './beasts.component.html',
  styleUrls: ['./beasts.component.css']
})
export class BeastsComponent implements OnInit {

  constructor(public ourBeasts :BeastsService) {
    
   }

  ngOnInit() {
  }

}
