import { Component, OnInit, Input } from '@angular/core';

export interface Todo {
  id: number,
  done: boolean,
  title: string,
  favorite: boolean,
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() title: string = "";
  constructor() { }

  todos: Todo[] = []
  isChecked : boolean = false
  id?: number
  favorite: boolean = false
  todo?: Todo



  addNewTodo(): void {
      this.todo?.title = this.title
      this.todos.push(this.todo)
    }
    console.log(this.todos)
  }

  ngOnInit(): void {
  }

  checkValue(check: boolean): void {
    check = !check

  }
}
