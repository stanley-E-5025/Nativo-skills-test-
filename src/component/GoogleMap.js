import React from "react";
import data from "../data/ZipCodes";

export default function GoogleMap() {
  return (
    <div>
      {data.map((data) => (
        <div key={Math.random()}>
          <div>{data.code}</div>
          <div>{data.municipio}</div>
          <div>{data.barrio}</div>
        </div>
      ))}
    </div>
  );
}
