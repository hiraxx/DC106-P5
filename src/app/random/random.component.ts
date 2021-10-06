import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:any;
  randoms = [
    Math.floor(Math.random() * 46 + 1),
    Math.floor(Math.random() * 46 + 1),
    Math.floor(Math.random() * 46 + 1),
    Math.floor(Math.random() * 46 + 1),
    Math.floor(Math.random() * 46 + 1),
    Math.floor(Math.random() * 46 + 1),
  ] ;


  result(num: number){
    this.value = this.randoms[num];
  }
}
