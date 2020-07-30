import React, { useEffect, useState } from "react";
import ObjectInfo from './ObjectInfo';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Calender = () => {
  const [data, setData] = useState([]);
  const [selectObjectData, setSelectObjectData] = useState(null);
  useEffect(() => {
    fetch("https://ssd-api.jpl.nasa.gov/cad.api")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
  let rowNum = 0;
  let mainContent;
  if(selectObjectData === null) {
    mainContent = (
      <div>
        <div className="container">
          <div className="row">
            <table className="table table-bordered table-dark mt-2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="">
                    Name
                  </th>
                  <th scope="col" className="">
                    Date
                  </th>
                  <th scope="col" className="">
                   Time
                  </th> 
                </tr>
              </thead>
              <tbody>
                {data.map((object) => {
                  console.log(object.map(data => data.split(","))[3])
                  return (
                    <tr>
                      <td>{(rowNum = rowNum + 1)}</td>
                      <td className="object-name" onClick={() => setSelectObjectData(object)}>
                          {object.map((data) => data.split(","))[0]}
                      </td>
                      <td>{(object.map(data => data.split(","))[3])[0].split(" ")[0]}</td>
                      <td>{(object.map(data => data.split(","))[3])[0].split(" ")[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } 
  else {
    mainContent = (
      <ObjectInfo 
      data = {selectObjectData}
      backToMainPage = {() => setSelectObjectData(null)}
      />
    );
  }
  return(
  <div>
    {mainContent}
  </div>
  )
};
export default Calender;
