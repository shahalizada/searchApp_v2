import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import find from "../actions/search";
import { withRouter } from "react-router-dom";
import Results from "./Results";

const Search = ({ find, searchId: { search, loading } }) => {
  const [searchForm, setSearchForm] = useState("");
  const { id } = searchForm;
  const onChange = (e) =>
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  return (
    <>
      {loading ? (
        ""
      ) : (
        <div>
          <Results search={search} />
        </div>
      )}
      <div className="container">
        <h1>Please enter your student ID.</h1>
        <p>
          Please Make sure you enter your Student ID correctly, becuase the app
          is case sensitive.
        </p>
        <form
          className="city-form"
          onSubmit={(e) => {
            e.preventDefault();
            find(searchForm);
          }}
        >
          <input
            className="form-input"
            type="text"
            placeholder="Place your student id"
            name="id"
            value={id}
            onChange={(e) => onChange(e)}
          />
          <br />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary btn-lg mg-top"
          />
        </form>
      </div>
    </>
  );
};

Search.propTypes = {
  find: PropTypes.func.isRequired,
  searchId: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  searchId: state.searchId,
});

export default connect(mapStateToProps, { find })(withRouter(Search));
