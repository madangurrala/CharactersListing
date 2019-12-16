import { Component, OnInit } from '@angular/core';

import { CharactersService } from './characters.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CharactersListing';
  charService: CharactersService;

  constructor(charService: CharactersService) {
    this.charService = charService;
  }

  ngOnInit() {
    this.charService.fetchCharacters();
  }
}
