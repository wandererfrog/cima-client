import nock from "nock";

import * as stateFunc from "../../../lib/stateFunc";
import config from "../../../config";

const initialState = {
  data: {
    groups: [{ value: 1, label: "Bovinos" }],
    species: [{ value: 26, label: "Vitelo" }],
    region: null,
    market: null,
    variety: [{ value: 139, label: "Turina" }],
    category: null
  },
  selection: {
    groups: { value: 1, label: "Bovinos" },
    species: { value: 26, label: "Vitelo" },
    region: null,
    market: null,
    variety: { value: 139, label: "Turina" },
    category: null,
    from: null,
    to: null
  }
};

const categoriesReply = { categories: [{ id: 12, name: "II" }] };
const marketsReply = { markets: [{ id: 13, name: "Minho" }] };
const regionsReply = { regions: [{ id: 11, name: "Porto" }] };

beforeEach(() => {
  nock(`${config.apiUrl}`)
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/categories?species_id=26&variety_id=139")
    .reply(200, categoriesReply);

  nock(`${config.apiUrl}`)
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/markets?species_id=26&variety_id=139")
    .reply(200, marketsReply);

  nock(`${config.apiUrl}`)
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/regions?species_id=26&variety_id=139")
    .reply(200, regionsReply);
});

describe("StateFunction tests", () => {
  it("Should return correct state object for when selecting varieties", () => {
    const { selection, data } = initialState;
    const expected = {
      data: {
        groups: [{ value: 1, label: "Bovinos" }],
        species: [{ value: 26, label: "Vitelo" }],
        region: [{ value: 11, label: "Porto" }],
        market: [{ value: 13, label: "Minho" }],
        variety: [{ value: 139, label: "Turina" }],
        category: [{ value: 12, label: "II" }]
      },
      selection: {
        groups: { value: 1, label: "Bovinos" },
        species: { value: 26, label: "Vitelo" },
        region: null,
        market: null,
        variety: { value: 139, label: "Turina" },
        category: null,
        from: null,
        to: null
      }
    };
    return stateFunc.getVarietiesState(selection, data).then(data => {
      expect(data).toEqual(expected);
    });
  });
});
