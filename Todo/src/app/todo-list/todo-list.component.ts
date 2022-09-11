import {Component, Input,} from '@angular/core';

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

  @Input() title: string = ''
  @Input() searchTitle: string = ''

  constructor() {}

  todos: Todo[] = []
  noFind: boolean = false
  toDoFilterOn:boolean = false
  importantFilterOn: boolean = false

  addNewTodo(): void {
    const todo = new Todo()
    todo.title = this.title
    this.todos.push(todo)
  }

  checkValue(event: any, id: number): void {
    this.todos[id].done = event.target.checked
    console.log(this.todos[id]);
  }

  addToImportant(id: number) {
    this.todos[id].important = !this.todos[id].important
    console.log(this.todos)
  }

  onlyTodoFilter() {
    this.toDoFilterOn = !this.toDoFilterOn
  }

  onlyImportantFilter() {
    this.importantFilterOn = !this.importantFilterOn
  }
}
