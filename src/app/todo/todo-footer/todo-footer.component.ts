import { Component, OnInit } from "@angular/core";
import { filtrosValidos } from "src/app/filter/model/filter.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";

import * as fromFiltro from "../../filter/filter.actions";
import * as fromTodo from "../todo.actions";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: filtrosValidos[] = ["todos", "completados", "pendientes"];
  filtroActual: filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  limpiarCompletados() {
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }
}
