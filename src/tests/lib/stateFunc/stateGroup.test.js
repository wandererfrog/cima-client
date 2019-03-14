import nock from "nock";
import moment from "moment";

import * as stateFunc from "../../../lib/stateFunc";
import config from "../../../config";

const initialState = {
  data: {
    groups: [{ value: 1, label: "Bovinos" }],
    species: null,
    region: null,
    market: null,
    variety: null,
    category: null
  },
  selection: {
    groups: { value: 1, label: "Bovinos" },
    species: null,
    region: null,
    market: null,
    variety: null,
    category: null,
    from: null,
    to: null
  }
};

const speciesReply = { species: [{ id: 26, name: "Vitelo" }] };

beforeEach(() => {
  nock(`${config.apiUrl}`)
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/species/1")
    .reply(200, speciesReply);
});

describe("StateFunction tests", () => {
  it("Should return correct state object for when selecting groups", () => {
    const { selection, data } = initialState;
    const expected = {
      data: {
        groups: [{ value: 1, label: "Bovinos" }],
        species: [{ value: 26, label: "Vitelo" }],
        region: null,
        market: null,
        variety: null,
        category: null
      },
      selection: {
        groups: { value: 1, label: "Bovinos" },
        species: null,
        region: null,
        market: null,
        variety: null,
        category: null,
        from: null,
        to: null
      }
    };
    return stateFunc.getGroupState(selection, data).then(data => {
      expect(data).toEqual(expected);
    });
  });
});
