import React from "react";
import ProfileLogo from "../assets/ProfileLogo.svg";

function Header() {
  return (
    <div className="h-24 items-center w-full border-b shadow-lg flex justify-between">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between ">
        <div />
        <div className="flex flex-row">
          <div className="flex flex-col justify-items-end">
            <p>BUFICOM OFFICER</p>
            <p>CCS EC</p>
          </div>

          <div>
            <img src={ProfileLogo} alt="Profile Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
