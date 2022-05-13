import {
  CREATE_PRONUNCIATION,
  RETRIEVE_PRONUNCIATIONS,
  UPDATE_PRONUNCIATION,
  DELETE_ALL_PRONUNCIATIONS,
  DELETE_PRONUNCIATION,
} from "../actions/types";

// const initialState = [{
//   pronunciation: "soumik"
// }, {
//   pronunciation: "satish"
// }];
const initialState = []

const pronunciationReducer = (pronunciations = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRONUNCIATION:
      return [...pronunciations, payload];

    case RETRIEVE_PRONUNCIATIONS:
      return payload;

    case UPDATE_PRONUNCIATION:
      return pronunciations.map((pronunciation) => {
        if (pronunciation.id === payload.id) {
          return {
            ...pronunciation,
            ...payload,
          };
        } else {
          return pronunciation;
        }
      });

    case DELETE_PRONUNCIATION:
      return pronunciations.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_PRONUNCIATIONS:
      return [];

    default:
      return pronunciations;
  }
};

export default pronunciationReducer;