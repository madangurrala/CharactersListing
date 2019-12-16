import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabularComponent } from './tabular/tabular.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CharactersService } from './characters.services';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

const routes = [
  {path: 'characters', component: TabularComponent, children: [
    {path: '', redirectTo: 'all', pathMatch : 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'}
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
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CharactersService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
