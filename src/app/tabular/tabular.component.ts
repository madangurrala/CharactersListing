import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {
  characters = [
    {name: 'Luke SkyWalker', side: ''},
    {name: 'Darth Wander', side: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
