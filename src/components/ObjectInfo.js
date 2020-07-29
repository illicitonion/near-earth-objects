import React  from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ObjectInfo = ({ data, backToMainPage }) => {
  let rowNum = 0;
  return (
    <div>
      <button onClick={() => backToMainPage()}>Back</button>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dist</th>
            <th scope="col">Dist-Min</th>
            <th scope="col">Dist-Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{(rowNum = rowNum + 1)}</th>
            <td>{(data.split(",")[4])}au</td>
            <td>{data.split(",")[5]}au</td>
            <td>{data.split(",")[6]}au</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ObjectInfo;
