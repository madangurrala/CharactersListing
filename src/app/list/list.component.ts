import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  charactersService: CharactersService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, charactersService: CharactersService) {
    this.activatedRoute = activatedRoute;
    this.charactersService = charactersService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.charactersService.getCharacter(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.charactersService.charactersChanged.subscribe(
      () => {
        this.characters = this.charactersService.getCharacter(this.loadedSide);

      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
