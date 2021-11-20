import React, { useState } from "react";

const EditorPanel = (props) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.handleSend(text);
      setText("");
    }
  };
  return (
    <div className="input-group mb-3 p-2">
      <input
        value={text}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        type="text"
        className="form-control"
        placeholder="Type..."
        aria-label="Type..."
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          disabled={text === ""}
          onClick={() => props.handleSend(text)}
          className="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
