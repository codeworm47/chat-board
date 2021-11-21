import React from "react";

const Header = (props) => {
  return (
      <h5 className="text-center font-weight-bold bg-light mt-2">{props.title}</h5>
  );
};
export default Header;
