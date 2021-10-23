import React from "react";
import data from "../data/ZipCodes";
import "../css/App.css";

export default function ZipList() {
  return (
    <>
      {data.map((data) => (
        <div key={Math.random()} className="Home-list-item">
          <div className="Home-list-left-info">
            <div className="Home-list-left-title">
              {data.departamento} , {data.municipio}
            </div>

            <div>{data.barrio}</div>
          </div>

          <div className="Home-list-right-info ">
            <div className="Home-list-left-title"> ZIP {data.code} </div>
          </div>
        </div>
      ))}
    </>
  );
}
