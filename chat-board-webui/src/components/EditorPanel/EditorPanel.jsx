import React, { useState } from "react";
import "./EditorPanel.css";

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
    <div className="input-group mb-3 mt-3">
      <input
        value={text}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        type="text"
        className="form-control"
        placeholder="Start typing..."
        aria-label="Start typing..."
        aria-describedby="button-addon2"
      />
      <div className="input-group-append editor-input">
        <button
          disabled={text === ""}
          onClick={() => props.handleSend(text)}
          className="btn btn-primary editor-button"
          type="button"
          id="button-addon2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
