import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = " #161620";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  // return(
  //   <>
  //     <Navbar mode={mode} toggleMode={toggleMode} title={"TextUtils"}/>
  //     <Alert alert={alert}/>
  //     <TextForm showAlert={showAlert} mode={mode}/>
  //     <About mode={mode}/>
  //   </>
  // );
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Here"
                mode={mode}
              ></TextForm>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
