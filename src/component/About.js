import React from "react";
// import PropTypes from "prop-types";


export default function About(props) {
  

  return (
    <div className="container"  style={{
            }}>
      <h1 className="my-3" style= {{color: props.mode === "dark" ? "white" : "#161620"}}>About us</h1>
      <div className="accordion" style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
            }} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            About me
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Hi I am <strong>Ayushman Garg</strong>.I have made this website as a Project. This is made using Bootstrap and React. If you want to suggest some change then you can contact me through Likedin or Twitter.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Linkedin
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Connect with me through Linkedin :  
              <a href="https://www.linkedin.com/in/ayushmangarg/" target="_blank">Ayushman Garg</a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Twitter
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "dark" ? "#161620" : "white",
              color: props.mode === "dark" ? "white" : "#161620"
            }}
          >
            <div className="accordion-body">
              Follow me on Twitter :
              <a href="https://twitter.com/AyushmanGarg4" target="_blank">Ayushman Garg</a>
            {/* https://twitter.com/AyushmanGarg4 */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
