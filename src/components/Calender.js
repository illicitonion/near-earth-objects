import React, { useEffect, useState } from "react";
import ObjectInfo from "./ObjectInfo";
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
  if (selectObjectData === null) {
    mainContent = (
      <div>
        <div className="container calender-image">
          <div className="mt-5 calender-title">
            {/* <img src="https://gifed.video/gif/001/star-citizen-asteroids.gif"  className="image-title-calender"/>  */}
            <img
              src="https://i.gifer.com/7b5j.gif"
              className="image-title-calender"
            />
            <p className="mr-auto calender-title-text">
              Calender Of <br /> Astronomical Events
            </p>
          </div>
          <div className="row">
            <table className="table object-table-calender mt-2">
              <thead className="thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="object-title">
                    <h1>Name</h1>
                  </th>
                  <th scope="col" className="object-title">
                    <h1>Date</h1>
                  </th>
                  <th scope="col" className="object-title">
                    <h1>Time</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((object) => {
                  return (
                    <tr>
                      <td>{(rowNum = rowNum + 1)}</td>
                      <td>
                        <a
                          href="#"
                          className="nameOfObject"
                          onClick={() => setSelectObjectData(object)}
                        >
                          {object.map((data) => data.split(","))[0]}
                        </a>
                      </td>
                      <td>
                        {
                          object
                            .map((data) => data.split(","))[3][0]
                            .split(" ")[0]
                        }
                      </td>
                      <td>
                        {
                          object
                            .map((data) => data.split(","))[3][0]
                            .split(" ")[1]
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    mainContent = (
      <div>
        <ObjectInfo
          data={selectObjectData}
          backToMainPage={() => setSelectObjectData(null)}
        />
      </div>
    );
  }
  return <div>{mainContent}</div>;
};
export default Calender;
