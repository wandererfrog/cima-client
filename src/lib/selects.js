import {
  getGroupState,
  getSpeciesState,
  getVarietiesState,
  getCategoriesState,
  getRegionsState,
  getMerketsState
} from "./stateFunc";

export async function onUpdateGetKeyList(name, selection, data) {
  switch (name) {
    case "groups":
      return getGroupState(selection, data);

    case "species":
      return getSpeciesState(selection, data);

    case "variety":
      return getVarietiesState(selection, data);

    case "category":
      return getCategoriesState(selection, data);
    case "region":
      return getRegionsState(selection, data);
    case "market":
      return getMerketsState(selection, data);
    default:
      return {
        data: Object.assign({}, data, {}),
        selection: Object.assign({}, selection, {})
      };
  }
}
