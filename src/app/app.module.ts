import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabularComponent } from './tabular/tabular.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CharactersService } from './characters.services';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    TabularComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CharactersService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
