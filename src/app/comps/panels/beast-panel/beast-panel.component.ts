import { BeastsService } from './../../../services/beasts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beast-panel',
  templateUrl: './beast-panel.component.html',
  styleUrls: ['./beast-panel.component.css']
})
export class BeastPanelComponent implements OnInit {

  constructor(public ourBeasts : BeastsService) { }

  ngOnInit() {
  }

}
