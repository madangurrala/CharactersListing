import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabularComponent } from './tabular/tabular.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CharactersService } from './characters.services';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: TabularComponent},
  {path: 'new-character', component:CreateCharacterComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabularComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CharactersService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
