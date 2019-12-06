import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: TodoModel[] = [];
  defaultTask = 'Be Happy!';

  constructor() { }

  ngOnInit() {
  }

  add(newTask: string) {
    if(!this.isValid(newTask)) {
      return;
    }

    this.list.push(new TodoModel(newTask));

    // this will clear the input only once
    // because the input has ONE-WAY binding to this value
    // <input type="text" [value]="defaultTask">
    // and defaultTask will be changed to '' only once and will always stay so
    // to clear all the other inputs from user, make two way binding for the input
    // using [(ngModel)] https://angular.io/api/forms/NgModel 
    this.defaultTask = '';
  }

  isValid(task: string): boolean {
    if(!task) {
      return false;
    }

    if(this.list.some(i => i.task == task)) {
      return false;
    }

    return true;
  }

  onTaskUpdated(e: string): void {
    console.log(e);
  }

  getNumberOfTodos(): number {
    return this.list.filter(i => !i.done).length;
  }

}
