import { Component, OnInit, Input} from '@angular/core';
import { CharactersService } from '../characters.services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  charService: CharactersService;

  constructor(charService: CharactersService) {
    this.charService = charService;
  }

  ngOnInit() {
  }

  onAssign(charSide){
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: charSide});
    this.charService.onSideChoosen({name: this.character.name, side: charSide});
  }

}
