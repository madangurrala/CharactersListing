import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.services';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {
  characters = [];
  chosenList = 'all';

  charService: CharactersService;
  constructor(charService: CharactersService) {
    this.charService = charService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacter(chosenList) {
    this.characters = this.charService.getCharacter(this.chosenList);
    return this.characters;
  }

}
