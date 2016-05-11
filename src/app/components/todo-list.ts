import {Component} from '@angular/core';
import {TodoService} from '../services/todo-service';

@Component({
  selector: 'todo-list',
  template: `<div>
      <ul>
        <li *ngFor="let todo of todoService.todos">
          <span [contentEditable]="todo.status === 'completed'">{{ todo.title }}</span>
          <button (click)="todo.toggle()">Toggle</button>
        </li>
      </ul>
  </div>`
})
export class TodoList{
  constructor(public todoService:TodoService){}
}
