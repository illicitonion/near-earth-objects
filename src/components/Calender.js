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
  let rowNum = 0
  return (
    <div>
      <div className="container"> 
      <div className="row">
       <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>  
            <th scope="col" className="">Name</th>
            <th scope="col" className="">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr>
                <td>{rowNum = rowNum + 1}</td>  
                <td><a href="#">{object.map((data) => data.split(","))[0]}</a></td>
                <td>{object.map((data) => data.split(","))[3]}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
      </div> 
      </div>
    </div>
  );
}
export default Calender;
