import axios from "axios";
import config from "../config";

export async function getGroups() {
  try {
    const response = await axios.get(`${config.apiUrl}/groups`);
    console.log(response);
    return response.data.groups;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecies(group_id) {
  try {
    const response = await axios.get(`${config.apiUrl}/species/${group_id}`);
    return response.data.species;
  } catch (error) {
    console.error(error);
  }
}

export async function getVarieties(species_id) {
  try {
    const response = await axios.get(
      `${config.apiUrl}/varieties/${species_id}`
    );
    return response.data.varieties;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategories(selection) {
  let params = {};
  if (selection.species) params["species_id"] = selection.species.value;

  if (selection.variety) params["variety_id"] = selection.variety.value;

  try {
    const response = await axios.get(`${config.apiUrl}/categories`, {
      params: params
    });
    return response.data.categories;
  } catch (error) {
    console.error(error);
  }
}

export async function getCalibers(params) {
  try {
    const response = await axios.get(`${config.apiUrl}/calibers`, params);
    return response.data.calibers;
  } catch (error) {
    console.error(error);
  }
}

export async function getPackaging(params) {
  try {
    const response = await axios.get(`${config.apiUrl}/packaging`, params);
    return response.data.packaging;
  } catch (error) {
    console.error(error);
  }
}

export async function getRegions(selection) {
  let params = {};
  if (selection.species) params["species_id"] = selection.species.value;

  if (selection.variety) params["variety_id"] = selection.variety.value;

  if (selection.category) params["category_id"] = selection.category.value;

  try {
    const response = await axios.get(`${config.apiUrl}/regions`, {
      params: params
    });
    return response.data.regions;
  } catch (error) {
    console.error(error);
  }
}

export async function getMarkets(selection) {
  let params = {};
  if (selection.species) params["species_id"] = selection.species.value;

  if (selection.variety) params["variety_id"] = selection.variety.value;

  if (selection.category) params["category_id"] = selection.category.value;

  if (selection.region) params["region_id"] = selection.region.value;

  try {
    const response = await axios.get(`${config.apiUrl}/markets`, {
      params: params
    });
    return response.data.markets;
  } catch (error) {
    console.error(error);
  }
}

export async function getCotas(selection) {
  let params = {};
  if (selection.species) params["species_id"] = selection.species.value;

  if (selection.variety) params["variety_id"] = selection.variety.value;

  if (selection.category) params["category_id"] = selection.category.value;

  if (selection.region) params["region_id"] = selection.region.value;

  params["from"] = selection.from.format("YYYY/MM/DD");
  params["to"] = selection.to.format("YYYY/MM/DD");

  try {
    const response = await axios.get(`${config.apiUrl}/products`, {
      params: params
    });
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}
