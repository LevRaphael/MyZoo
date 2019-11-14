import { WildsService } from './../../../services/wilds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wild-panel',
  templateUrl: './wild-panel.component.html',
  styleUrls: ['./wild-panel.component.css']
})
export class WildPanelComponent implements OnInit {

  constructor(public ourWilds : WildsService) { }

  ngOnInit() {
  }

}
