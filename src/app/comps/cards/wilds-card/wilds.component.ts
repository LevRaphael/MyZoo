import { WildsService } from './../../../services/wilds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilds',
  templateUrl: './wilds.component.html',
  styleUrls: ['./wilds.component.css']
})
export class WildsComponent implements OnInit {

  constructor( public ourWilds : WildsService) { }

  ngOnInit() {
  }

}
