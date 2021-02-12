import React, { useState } from "react";
import PropTypes from "prop-types";
import addCity from "../actions/cityName";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const CityName = ({ addCity, history }) => {
  const [formData, setFormData] = useState("");
  const { cityName } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div className="container">
      <h1>Please Enter you City Name.</h1>
      <form
        className="city-form"
        onSubmit={(e) => {
          e.preventDefault();
          addCity(formData, history);
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Place your city name"
          name="cityName"
          value={cityName}
          onChange={(e) => onChange(e)}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-lg mg-top"
        />
      </form>
    </div>
  );
};

CityName.propTypes = {
  addCity: PropTypes.func.isRequired,
};

export default connect(null, { addCity })(withRouter(CityName));
