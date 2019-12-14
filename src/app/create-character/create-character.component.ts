import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.services';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSide = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];
  defaultname = 'Bat-Man';
  private charService: CharactersService;

  constructor(charService: CharactersService) {
    this.charService = charService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm);
    if (submittedForm.invalid) {
      return;
    }
    const element = document.getElementById('error') as HTMLFieldSetElement;
    this.charService.addCharacter(submittedForm.value.name, submittedForm.value.side);
    if ( this.charService.pos !== -1) {
      element.textContent = 'Entered Character exists';
    } else {
      element.textContent = '';
    }
  }

}
