import React, { useState, useEffect } from "react";
import "../css/App.css";
import ZipList from "./ZipList";
import ZipError from "./ZipError";
import data from "../data/ZipCodes";

export default function ZipApplication() {
  const [value, setValue] = useState("");

  const [resultState, setResultState] = useState({
    status: "",
  });

  const match =
    data.filter(function (e) {
      if (e.code === value) return true;
      else return false;
    }).length > 0;

  useEffect(() => {
    setResultState({ status: "start" });
  }, []);

  return (
    <div className="  container-fluid   Home-container ">
      <div className="  Home-top-bar-container">
        <div className="  Home-top-bar-title">Zip. App</div>

        <div className="  Home-top-bar-link">
          <i className="  fab fa-github Home-top-bar-link-icon"></i>
          <a
            className="  code-link"
            href="https://github.com/stanley-E-5025/Nativo-skills-test-"
          >
            source code
          </a>
        </div>
      </div>

      <div className="  container   Home-items-container  ">
        <div className="   row  ">
          <div className="  col-md-12   Home-search-container">
            <div className="   Home-input-container">
              <input
                placeholder="Search "
                className="  Home-text-input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="Home-auto-complete-container">
              {match === false && value.length >= 4 && (
                <button className="Home-auto-complete-option-err">
                  invalid code
                </button>
              )}
              {data
                .filter((data) => data.code === value)
                .map((data) => {
                  return (
                    <button
                      className="Home-auto-complete-option"
                      key={data.code}
                      tabIndex="0"
                      onClick={() =>
                        setResultState({
                          code: data.code,
                          status: "match",
                          departamento: data.departamento,
                          municipio: data.municipio,
                          barrio: data.barrio,
                          error: "",
                        })
                      }
                    >
                      {data.departamento} , {data.barrio},{data.code}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="  row  ">
          {resultState.status !== "start" && (
            <div className="  col-md-12   Home-result-container">
              <div className="  Home-bottom-cards">
                <div className="      Home-card-title">results</div>
                <div className="  Home-card-scroll-container">
                  {resultState.status === "" && <ZipError error={match} />}
                  {resultState.status === "match" && match === false && (
                    <ZipError error={match} />
                  )}

                  {resultState.status === "match" &&
                    match === false &&
                    setResultState({ status: "" })}
                  {resultState.status === "match" && match === true && (
                    <div className="   Home-card-match-container">
                      <div className="   Home-card-match-container-Item">
                        <div className="Home-list-left-info">
                          <div className="Home-list-left-title">
                            {resultState.departamento} , {resultState.municipio}
                          </div>

                          <div>{resultState.barrio}</div>
                        </div>

                        <div className="Home-list-right-info-match  ">
                          <div className="Home-list-left-title">
                            {" "}
                            ZIP {resultState.code}{" "}
                          </div>
                        </div>
                      </div>
                      <div className="Home-match-image-container  ">
                        <img
                          alt="User  "
                          className="Home-card-image-err-match"
                          src="https://siasky.net/_ATBFW5aONufqUScyqkSnWN1IbofC__lhLBpMZ59ltqqeg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="  col-md-12   Home-result-container">
            <div className="  Home-bottom-cards">
              <div className="     Home-card-title">All Zip Codes</div>

              <div className="     Home-card-scroll-container">
                <ZipList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
