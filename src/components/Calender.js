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
  let Rate;

  if (selectObjectData === null) {
    // Any time you have an if in React, and inside your if statement is more than 5 lines of HTML, you probably want to extract a component.
    // I'd recommend extracting a Calendar component for this information.
    // The if here isn't really doing much other than choosing between two things to display, so I'd maybe move the if up to App.js, and have the Calendar component just be the code inside your if.
    mainContent = (
      <div>
        <div className="container calender">
          <div className="mt-3 calender-title">
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
                  <th scope="col" className="object-title">
                    <h1 className="ml-5">Visibility</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((object) => {
                  // You are doing the same object.map((data) => data.split(",")) 5 times. Maybe you should assign it to a variable, rather than repeating it?
                  // Also, why are you splitting the strings in the array on the comma? As far as I can tell, the strings in the array don't contain commas, and you're always getting the first value, which is the whole string?
                  console.log(object.map((data) => data.split(",")))
                  return (
                    <tr>
                      { /* Instead of counting rowNum yourself, you can use a second argument in your function you use with map. data.map((object, i) => {...})} - i will count from 0 and add one it itself for each row. */}
                      <td>{(rowNum = rowNum + 1)}</td>
                      <td>
                        <a
                          href="#"
                          className="nameOfObject"
                          onClick={() => setSelectObjectData(object)}
                        >
                          { /* It could be nice to destructure these values out at the top of the function - that would make it easier to read your code and see what each of these values is in the array... `const [name, _1, _2, dateTime, distance ] = object` */}
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
                      <td className="rate">
                        {/* What's the biggset and smallest value you can get from this calculation? */}
                       {Math.ceil(Math.round((((Math.ceil(object.map((data) => data.split(","))[4] * (1.496e+8).toFixed(2))/5e+6).toFixed(2))/1.5)*100)*0.1)}<i class="fas fa-star"></i>
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
