import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  pos: number;
  private characters = [
    {name: 'Luke SkyWalker', side: ''},
    {name: 'Darth Wander', side: ''}
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;
  data: any = [];

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
   }

   fetchCharacters() {
     this.http.get('https://swapi.co/api/people')
     .subscribe( (response: any []) => {
         this.data = response;
         const extractedChars = this.data.results;
         const chars = extractedChars.map((char: { name: any; }) => {
           return {name: char.name, side: ''};
         });
         console.log(chars);
         this.characters = chars;
         this.charactersChanged.next();
      });
    }

  getCharacter(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }
  onSideChoosen(charInfo) {
    const position = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[position].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);

  }

  addCharacter(charName, charSide) {
    this.pos = this.characters.findIndex((char) => {
      return char.name === charName;
    });
    if (this.pos !== -1) {
      return;
    }
    const newChar = {name: charName, side: charSide};
    this.characters.push(newChar);
  }

}
