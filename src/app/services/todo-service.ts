import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo-model';

@Injectable()
export class TodoService{
  todos = [
    new TodoModel('one'),
    new TodoModel('two'),
    new TodoModel('three'),
    new TodoModel('four'),
  ];
}
