/*import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {SeedApp} from './app/seed-app';

// enableProdMode()

bootstrap(SeedApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));*/

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

import {TodoInput} from './app/components/todo-input';
import {TodoList} from './app/components/todo-list';
import {StatusSelector} from './app/components/status-selector';
import {SearchBox} from './app/components/search-box';

import {TodoService} from './app/services/todo-service';

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, StatusSelector, SearchBox],
  template: `<div>
  <search-box (update)="term = $event"></search-box>
  <todo-input></todo-input>
  <status-selector (select)="status = $event"></status-selector>
  <todo-list
  [status]="status"
  [term]="term"></todo-list>
  </div>`
})
class App{}

bootstrap(App, [TodoService]);
