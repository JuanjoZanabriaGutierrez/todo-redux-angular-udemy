import { Component, OnInit } from "@angular/core";
import { Todo } from "../model/todo.model";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { filtrosValidos } from "src/app/filter/model/filter.model";

@Component({
  selector: "app-todos-list",
  templateUrl: "./todos-list.component.html",
  styles: []
})
export class TodosListComponent implements OnInit {
  todos: Todo[];
  filtro: filtrosValidos;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(store => {
      this.todos = store.todos;
      this.filtro = store.filtro;
    });
  }
}
