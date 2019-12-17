import { Todo } from "./todo/model/todo.model";
import { filtrosValidos } from "./filter/model/filter.model";
import { ActionReducerMap } from "@ngrx/store";
import * as fromTodo from "./todo/todo.reducer";
import * as fromFiltro from "./filter/filter.reducer";

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
