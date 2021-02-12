import { ADD_CITY, FAIL_CITY } from "../actions/types";

const initialState = {
  city: null,
  error: {},
  loading: true,
};

function addCity(state = initialState, aciton) {
  const { type, payload } = aciton;
  switch (type) {
    case ADD_CITY:
      return {
        ...state,
        city: payload,
        loading: false,
      };
    case FAIL_CITY:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default addCity;
