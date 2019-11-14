import { BirdsService } from './../../../services/birds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds-card',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  constructor(public bs : BirdsService) { }

  ngOnInit() {
  }

}
