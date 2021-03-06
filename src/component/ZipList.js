import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import data from "../data/ZipCodes";

export default function ZipList() {
  return (
    <>
      {data.map((data) => (
        <div key={Math.random()} className="Home-list-item">
          <div className="Home-list-left-info  ">
            <div className="Home-list-left-title">
              {" "}
              <i className="fas fa-map-marker-alt Zip-custom-I"></i>
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
