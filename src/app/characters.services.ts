import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {
  private characters = [
    {name: 'Luke SkyWalker', side: ''},
    {name: 'Darth Wander', side: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
   }

  getCharacter(chosenList) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }
  onSideChoosen(charInfo){
    const position = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[position].side = charInfo.side;
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);

  }
}
