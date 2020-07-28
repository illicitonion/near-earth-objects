import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Calender = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://ssd-api.jpl.nasa.gov/cad.api")
    .then(response => response.json())
    .then(data => setData(data.data)
    );
  }, []);

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr>
                <td>{object.map((data) => data.split(","))[0]}</td>
                <td>{object.map((data) => data.split(","))[3]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Calender;
