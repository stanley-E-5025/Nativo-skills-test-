import React from "react";

export default function ZipError() {
  return (
    <div className="   Home-Zip-Error">
      <img
        alt="User  "
        className="Home-card-image-err"
        src="https://i.pinimg.com/originals/e5/2b/fa/e52bfabd131ce16b7ccb1c30dda657e6.png"
      />

      <div className="Home-card-txt-err">
        Oops, try to write something first
        <i className="fas fa-exclamation-triangle Error-Icon"></i>
      </div>
    </div>
  );
}
