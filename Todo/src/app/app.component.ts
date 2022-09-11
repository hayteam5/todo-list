import {Component, ViewChild} from '@angular/core';
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(TodoListComponent) todoList?: TodoListComponent

  newTodo: string = ''
  newSearch: string = ''

  addTask() {
    if (this.newTodo) {
      this.todoList?.addNewTodo()
      this.newTodo = ''
    }
  }

  onlyTodoFilter() {
    this.todoList?.onlyTodoFilter()
  }

  onlyImportantFilter() {
    this.todoList?.onlyImportantFilter()
  }
}
