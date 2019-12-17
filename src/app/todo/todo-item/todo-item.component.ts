import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Todo } from "../model/todo.model";
import { FormControl, Validators } from "@angular/forms";
import * as fromTodo from "../todo.actions";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @ViewChild("txtInputFisico", { static: false }) txtInputFisico: ElementRef;
  @Input() todo: Todo;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const accion = new fromTodo.ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (
      this.editando ||
      this.txtInput.invalid ||
      this.txtInput.value === this.todo.texto
    ) {
      return;
    }
    const accion = new fromTodo.EditTodoAction(
      this.todo.id,
      this.txtInput.value
    );
    this.store.dispatch(accion);
  }

  borrarTodo() {
    const accion = new fromTodo.BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
}
