import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Calender = () => {
  const [data, setData] = useState([]);
  //   const [nameOfObject, setNameOfObject] = useState();
  //   const [possibleDateOfAppearing, setPossibleDateOfAppearing] = useState();
  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  useEffect(() => {
    fetchJson("https://ssd-api.jpl.nasa.gov/cad.api").then((data) =>
      setData(data)
    );
    //  setPossibleDateOfAppearing(data.filter(wholeData => wholeData.data.map(eachObject => eachObject.map( data=> data.split(","))[3])))
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
          {data.data.map((object) => {
            return (
              <tr>
                <td>{object.map((data) => data.split(","))[3]}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Calender;
