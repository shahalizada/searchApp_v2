import { ADD_CITY, FAIL_CITY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

const addCity = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/addCity", formData, config);
    dispatch({
      type: ADD_CITY,
      payload: res.data,
    });
    dispatch(setAlert("City Name was Successfully added", "success"));
    history.push("/search");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FAIL_CITY,
      payload: { msg: err.response.statusText, stauts: err.response.status },
    });
  }
};

export default addCity;
