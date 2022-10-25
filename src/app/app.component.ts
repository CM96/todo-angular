import { Component, Input, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Todo } from './shared/models/models';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cm-todo';
  todos: Todo[] = [];
  showInput: boolean = false;
  newTodo: string = '';
  selectedTodos: string[] = [];

  constructor(public todoService: TodoService) {
    this.todos = [
      {
        title: 'Lelo',
        author: 'Leo'
      },
      {
        title: 'Lobi',
        author: 'Leo'
      },
    ]
  }

  addTodo() {
    const isExistingTodo = this.todos.some(todo => todo.title === this.newTodo);
    console.log('isExistingTodo', isExistingTodo)
    if (!isExistingTodo) {
      this.todos.push({ title: this.newTodo, author: 'Leo' });
      this.showInput = false;
      this.clearInput();
    }
    else {
      alert(`${this.newTodo} already exists`);
    }

  }

  showInputForm() {
    console.log('here');
    this.showInput = true;
  }

  clearInput() {
    this.newTodo = '';
  }

  onSelectionChanged(valueSelected: any) {
    this.selectedTodos.push(valueSelected);
  }
}