import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Results = ({ search }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Birthday</th>
            <th>City</th>
            <th>School</th>
            <th>Gender</th>
            <th>Score</th>
            <th>Status</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{search.findRecord.id}</td>
            <td>{search.findRecord.firstName}</td>
            <td>{search.findRecord.lastName}</td>
            <td>{search.findRecord.fatherName}</td>
            <td>
              <Moment format="DD/MM/YYYY">{search.findRecord.birthday}</Moment>
            </td>
            <td>{search.findRecord.city}</td>
            <td>{search.findRecord.schoolName}</td>
            <td>{search.findRecord.gender}</td>
            <td>{search.findRecord.score}</td>
            <td>{search.findRecord.status}</td>
            <td>{search.findRecord.result}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Results.propTypes = {
  search: PropTypes.object.isRequired,
};

export default Results;
