import { Action } from "@ngrx/store";
import { filtrosValidos } from "./model/filter.model";

export const SET_FILTRO = "[Filter] Set Filtro";

export class SetFiltroAction implements Action {
  readonly type: string = SET_FILTRO;
  constructor(public filtro: filtrosValidos) {}
}

export type Acciones = SetFiltroAction;
