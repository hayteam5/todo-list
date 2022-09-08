import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todo: string = "";
  constructor() { }

  todos: string[] = []
  isChecked : boolean = false

  addNewTodo(): void {
    this.todos.push(this.todo)
    console.log(this.todos)
  }

  ngOnInit(): void {
  }

  checkValue(check: boolean): void {
    check = !check

  }
}
