import React  from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ObjectInfo = ({ data, backToMainPage }) => {
  let rowNum = 0;
  console.log(data);
  return (
    <div>
      <button className="m-5" onClick={() => backToMainPage()}>Back</button>
      <div className="container">
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Distance</th>
            <th scope="col">Distance-Min</th>
            <th scope="col">Distance-Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{rowNum = rowNum + 1}</th>
             <td>{(data[4]) * (149,597,870.69)} kilometers</td>
            <td>{(data[5]) * (149,597,870.69)} kilometers</td>
            <td>{(data[6]) * (149,597,870.69)} kilometers</td> 
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ObjectInfo;
