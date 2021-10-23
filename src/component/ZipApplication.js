import React, { useState } from "react";
import "../css/App.css";
import ZipList from "./ZipList";
import ZipError from "./ZipError";

export default function ZipApplication() {
  const [value, setValue] = useState();

  return (
    <div className="  container-fluid   Home-container ">
      <div className="  Home-top-bar-container  ">
        <div className="  Home-top-bar-title">
          <span className="  Home-top-bar-title-color">Zip.</span>
          App
        </div>

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
        <div className="  row  ">
          <div className="  col-md-12   Home-search-container">
            <input
              placeholder="Search "
              className="  Home-text-input"
              type="number"
              min="0"
              step="1"
              value={value && Math.max(0, value)}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className="  row  ">
          <div className="  col-md-5   Home-result-container">
            <div className="  Home-bottom-cards">
              <div className="   border Home-card-title">All Zip Codes</div>

              <div className="     Home-card-scroll-container">
                <ZipList />
              </div>
            </div>
          </div>
          <div className="  col-md-7   Home-result-container">
            <div className="  Home-bottom-cards">
              <div className="   border  Home-card-title">results</div>
              <div className="  Home-card-scroll-container">
                <ZipError />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
