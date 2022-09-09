import {
  Component,
  Input,
} from '@angular/core';

export class Todo {
  done: boolean = false
  title: string = ''
  important: boolean = false
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() title: string = "";

  constructor() {}

  importantToggle = false
  todos: Todo[] = []


  addNewTodo(): void {
    const todo = new Todo()
    todo.title = this.title
    this.todos.push(todo)
  }

  checkValue(event: any): void {
    const checkEvent = event.target.checked
    const idEvent = event.target.id

    this.todos[idEvent].done = checkEvent
    console.log(this.todos[idEvent]);
  }

  addToImportant(event: any) {
    const idEvent = event.target.id

    this.importantToggle = !this.todos[idEvent].important
    this.todos[idEvent].important = this.importantToggle

    console.log(this.todos)
  }
}
