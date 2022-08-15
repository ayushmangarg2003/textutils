import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const UpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const LowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ClearText = () => {
    setText("");
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  const CopyText = () => {
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div className="container w-9/12 p-6 ">
        <div style={{ color: props.mode === "dark" ? "white" : "#161620" }}>
          <h1 className="mb-3 text-2xl font-semibold">
            Enter Your Text Below :
          </h1>
          <div className="mb-3">
            <textarea
              className="form-control "
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
          <button
            className="btn btn-primary mx-2 w-2/12 "
            onClick={UpperCaseClick}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mx-2 w-2/12"
            onClick={LowerCaseClick}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-danger mx-2 w-2/12 " onClick={ClearText}>
            Clear The Screen
          </button>
          <button className="btn btn-success mx-2 w-2/12 " onClick={CopyText}>
            Copy Text
          </button>
        </div>

        <div style={{ color: props.mode === "dark" ? "white" : "#161620" }}>
          <h2 className="my-3 text-2xl font-semibold">Text Summary : </h2>
          <p className=" mb-8 ">
            <b>{text.split(" ").length - 1}</b> Words and <b> {text.length}</b>{" "}
            Characters
          </p>
        </div>

        <h2
          className=" text-2xl mb-3 font-semibold"
          style={{ color: props.mode === "dark" ? "white" : "#161620" }}
        >
          Preview Your Text Here :
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
