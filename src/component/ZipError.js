import React from "react";

export default function ZipError({ error }) {
  return (
    <div className="   Home-Zip-Error">
      {error === false && (
        <img
          alt="User  "
          className="Home-card-image-err"
          src="https://i.pinimg.com/originals/e5/2b/fa/e52bfabd131ce16b7ccb1c30dda657e6.png"
        />
      )}
      <div className="Home-card-txt-err">
        {error === true && (
          <div className="Home-card-match-result">
            {" "}
            nice! now select the autocomplete result
            <i className="far fa-check-circle H-I"></i>
          </div>
        )}

        {error === false && (
          <>
            <div>
              {
                "  Oops, try to write something first or try to write a valid code "
              }{" "}
              <i className="fas fa-exclamation-triangle Error-Icon"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
