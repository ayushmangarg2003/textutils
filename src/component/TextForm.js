import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const UpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UPPERCASE", "success");
  };
  const LowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lowercase", "success");
  };
  const ClearText = () => {
    setText("");
    props.showAlert("Text CLEARED", "danger");
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  const CopyText = () => {
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  };
  return (
    <>
    <div className="container">
      <div style={{ color: props.mode === "dark" ? "white" : "#161620" }}>
        <h1 className="my-3">Enter Your Text Below</h1>
        <div className="mb-3">
          <textarea
            className="form-control  my-2"
            value={text}
            onChange={onchange}
            rows="8"
            style={{
              
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620",
            }}
            id="floatingTextarea"
          >
            {" "}
          </textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpperCaseClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={LowerCaseClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1" onClick={ClearText}>
          Clear The Screen
        </button>
        <button className="btn btn-success mx-1" onClick={CopyText}>
          Copy Text
        </button>
      </div>

      <div
        style={{ color: props.mode === "dark" ? "white" : "#161620" }}
      >
        <h2 className="my-3">Text Summary</h2>
        <p className="my-2">
          <b>{text.split(" ").length}</b> Words and <b> {text.length}</b>{" "}
          Characters
        </p>
      </div>
      
      <h2
        className="my-3 "
        style={{ color: props.mode === "dark" ? "white" : "#161620" }}>
        Preview Your Text Here:
      </h2>
      <p
        className="my-2"
        style={{ color: props.mode === "dark" ? "white" : "#161620" }}
      >
        {text.length > 0 ? text : "Enter something To preview"}
      </p>
      </div>

    </>
  );
}
