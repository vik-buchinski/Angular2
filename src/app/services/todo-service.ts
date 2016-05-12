import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo-model';

@Injectable()
export class TodoService{
  todos = [
    new TodoModel('one', 'completed'),
    new TodoModel('two'),
    new TodoModel('three'),
    new TodoModel('four', 'completed'),
    new TodoModel('one1', 'completed'),
    new TodoModel('two2'),
    new TodoModel('three3', 'completed'),
    new TodoModel('four4'),
  ];

  addTodo(todo:TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo:TodoModel) {
    todo.toggle();
    this.todos = [...this.todos];
  }
}
