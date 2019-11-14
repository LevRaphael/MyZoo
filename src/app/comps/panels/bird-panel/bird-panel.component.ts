import { BirdsService } from './../../../services/birds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird-panel',
  templateUrl: './bird-panel.component.html',
  styleUrls: ['./bird-panel.component.css']
})
export class BirdPanelComponent implements OnInit {

  constructor(public ourBirds:BirdsService) { }

  ngOnInit() {
  }

}
