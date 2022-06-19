import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streetlightpole',
  templateUrl: './streetlightpole.component.html',
  styleUrls: ['./streetlightpole.component.scss']
})
export class StreetlightpoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  view : string ='invoice'

  onClick(val : string) : void {
    this.view = val;
  }

}