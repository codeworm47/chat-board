import React, { useRef } from "react";

const Panel = (props) => {
  const refActivation = useRef(null);
  return (
    <li
      ref={refActivation}
      onClick={props.handleIsActive}
      className={`list-group-item ${props.active}`}
    >
      {props.text}
    </li>
  );
};
export default Panel;
