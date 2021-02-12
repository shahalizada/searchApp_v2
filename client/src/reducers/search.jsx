import { SUCCESS_SEARCH, FAIL_SEARCH } from "../actions/types";

const initialState = {
  search: null,
  error: {},
  loading: true,
};

function searchId(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SUCCESS_SEARCH:
      return {
        ...state,
        search: payload,
        loading: false,
      };
    case FAIL_SEARCH:
      return {
        ...state,
        error: payload,
        loading: true,
      };
    default:
      return state;
  }
}

export default searchId;
