import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ObjectInfo = ({ data, backToMainPage }) => {
  let rowNum = 0;
  return (
    <div>
      <button
        type="button"
        className="btn m-5 info-button"
        onClick={() => backToMainPage()}
      >
        Back
      </button>
      <div className="container">
        <table className="table table-bordered object-table-info">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Distance</th>
              <th scope="col">Min-Distance</th>
              <th scope="col">Max-Distance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{(rowNum = rowNum + 1)}</th>
              <td>{data[4]} Astronomical unit</td>
              <td>{data[5]} Astronomical unit</td>
              <td>{data[6]} Astronomical unit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ObjectInfo;
