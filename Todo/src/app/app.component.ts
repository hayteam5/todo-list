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

  addTask() {
    if (this.newTodo) {
      this.todoList?.addNewTodo()
      this.newTodo = ''
    }
  }
}
