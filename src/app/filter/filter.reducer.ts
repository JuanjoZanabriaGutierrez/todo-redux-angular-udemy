import * as fromFiltro from "./filter.actions";
import { filtrosValidos } from "./model/filter.model";

const estadoInicial: filtrosValidos = "todos";

export function filtroReducer(
  state = estadoInicial,
  action: fromFiltro.Acciones
): filtrosValidos {
  switch (action.type) {
    case fromFiltro.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }
}
