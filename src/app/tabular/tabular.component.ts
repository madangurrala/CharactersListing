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
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  getCharacter() {

    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

  onChoose(side) {
    this.chosenList = side;
  }

  onSideChoosen(charInfo){
    const position = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[position].side = charInfo.side;

  }

}
