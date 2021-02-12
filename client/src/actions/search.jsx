import { SUCCESS_SEARCH, FAIL_SEARCH } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

const find = (searchForm) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/searchRecord", searchForm, config);
    dispatch({
      type: SUCCESS_SEARCH,
      payload: res.data,
    });
    dispatch(setAlert("Successfully fetched data from server", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FAIL_SEARCH,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export default find;
