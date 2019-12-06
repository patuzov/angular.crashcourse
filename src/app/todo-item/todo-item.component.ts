import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task: TodoModel;
  @Output() taskUpdated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.task.done = !this.task.done;
    
    this.taskUpdated.emit(`State changed for: ${this.task.task}`);
  }

}
