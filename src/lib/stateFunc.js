import * as apiCalls from "./api";

export async function getGroupState(selection, data) {
  let newData = {};
  let newSelection = {};

  const species = await apiCalls.getSpecies(selection.groups.value);

  newData = Object.assign({}, data, {
    species: species.map(s => ({ value: s.id, label: s.name })), // get species for group
    variety: null,
    category: null,
    market: null,
    region: null
  });
  newSelection = Object.assign({}, selection, {
    species: null,
    variety: null,
    category: null,
    market: null,
    region: null
  });
  return {
    data: newData,
    selection: newSelection
  };
}

export async function getSpeciesState(selection, data) {
  let newData = {};
  let newSelection = {};
  newData = Object.assign({}, data, {
    variety: await apiCalls
      .getVarieties(selection.species.value)
      .then(response => {
        return response.map(s => ({ value: s.id, label: s.name }));
      }), // get varieties for species
    category: await apiCalls.getCategories(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }), // get varieties for species
    market: await apiCalls.getMarkets(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }), // get varieties for species
    region: await apiCalls.getRegions(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }) // get varieties for species
  });
  newSelection = Object.assign({}, selection, {
    variety: null,
    category: null,
    market: null,
    region: null
  });
  return {
    data: newData,
    selection: newSelection
  };
}

export async function getVarietiesState(selection, data) {
  let newData = {};
  let newSelection = {};

  newData = Object.assign({}, data, {
    category: await apiCalls.getCategories(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }), // get varieties for species
    market: await apiCalls.getMarkets(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }), // get varieties for species
    region: await apiCalls.getRegions(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }) // get varieties for species
  });

  newSelection = Object.assign({}, selection, {
    category: null,
    market: null,
    region: null
  });

  return {
    data: newData,
    selection: newSelection
  };
}

export async function getCategoriesState(selection, data) {
  let newData = {};
  let newSelection = {};
  newData = Object.assign({}, data, {
    market: await apiCalls.getMarkets(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }), // get varieties for species
    region: await apiCalls.getRegions(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }) // get varieties for species
  });
  newSelection = Object.assign({}, selection, {
    market: null,
    region: null
  });
  return {
    data: newData,
    selection: newSelection
  };
}

export async function getRegionsState(selection, data) {
  let newData = {};
  let newSelection = {};
  newData = Object.assign({}, data, {
    market: await apiCalls.getMarkets(selection).then(response => {
      return response.map(s => ({ value: s.id, label: s.name }));
    }) // get varieties for species
  });
  newSelection = Object.assign({}, selection, {
    market: null
  });
  return {
    data: newData,
    selection: newSelection
  };
}

export async function getMerketsState(selection, data) {
  return {
    data: Object.assign({}, data, {}),
    selection: Object.assign({}, selection, {})
  };
}
