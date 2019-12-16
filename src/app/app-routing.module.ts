import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabularComponent } from './tabular/tabular.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes = [
  {path: 'characters', component: TabularComponent, children: [
    {path: '', redirectTo: 'all', pathMatch : 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters/all'}
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
