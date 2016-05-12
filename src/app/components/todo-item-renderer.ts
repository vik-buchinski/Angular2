import {
  Component, Input,
  ViewEncapsulation, Output,
  EventEmitter,
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'todo-item-renderer',
  template: `
    <style>
      .completed{
        text-decoration: line-through;
      }
    </style>
    <span [ngClass]="todo.status">{{ todo.title | uppercase }}</span>
    <button (click)="toggle.emit(todo)">Toggle</button>
  `
})
export class TodoItemRenderer{
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
